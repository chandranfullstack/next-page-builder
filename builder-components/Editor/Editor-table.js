import React, { useState, useEffect, useRef, useContext } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { ToggleButton } from 'primereact/togglebutton';
import { Rating } from 'primereact/rating';
import { CustomerService } from '../../demo/service/CustomerService';
import { ProductService } from '../../demo/service/ProductService';
import { Dialog } from 'primereact/dialog';
import { getBaseUrl } from '../../helpers/url';
import { fetchJSON } from '../../helpers/crud';
import { getPageNames } from '../../demo/service/fileNames';
import { useRouter } from 'next/router';
import { LayoutContext } from '../../layout/context/layoutcontext';
import EmptyError from '../Error/EmptyError';

import { InputText } from 'primereact/inputtext';
import Image from "next/image"

const EditorTable = () => {
    const [pageList, setPageList] = useState([]);
    const [filters1, setFilters1] = useState(null);
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [idFrozen, setIdFrozen] = useState(false);
    const [products, setProducts] = useState([]);
    const [globalFilterValue1, setGlobalFilterValue1] = useState('');
    const [expandedRows, setExpandedRows] = useState(null);
    const [allExpanded, setAllExpanded] = useState(false);
    const [displayBasic, setDisplayBasic] = useState(false);
    const [newFileName,setNewFileName]=useState("")
    const [pageSlug,setPageSlug]=useState("")
    const [metaDetails,setMetaDetail]=useState("")
    const router=useRouter()
    const {currentPage,setCurrentPage,currentDetails,setCurrentDetails}=useContext(LayoutContext)
    const [editPageList, setEditPageList] = useState([]);
    const [editDialog, setEditDialog] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [deletePageDialog, setDeletePageDialog] = useState(false);
    const [Error,setError]=useState(null)
    const [EditNewFileName, setEditNewFileName] = useState(editPageList!==undefined?editPageList.name:null);
    const [EditPageSlug, setEditPageSlug] = useState(editPageList!==undefined?editPageList.slug:null);
    const [EditMetaDetail, setEditMetaDetail] = useState(editPageList!==undefined?editPageList.meta:null);
    

    const representatives = [
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ];

    const statuses = ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'];

    const clearFilter1 = () => {
        initFilters1();
    };

    const onGlobalFilterChange1 = (e) => {
        const value = e.target.value;
        let _filters1 = { ...filters1 };
        _filters1['global'].value = value;

        setFilters1(_filters1);
        setGlobalFilterValue1(value);
    };

    const renderHeader1 = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter1} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    useEffect(() => {
        setLoading1(true);

       
        const fetchPages=async()=>{
            const data={action:"getpages",websiteId:currentDetails._id}
            await fetch("/api/auth/middleware",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({data})})
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                res.pages.map((dat)=>{
                    if(res.pages.length!==pageList.length){
                        pageList.push(dat)
                    }
                })
                setEditPageList(res.pages[0])
                console.log(pageList,"pageList")
                setLoading1(false); 

            })
        }
        fetchPages()
        // getPageNames().then((data) => {
        //     setPageList(data)
        //     console.log(pageList,"pageList",data)
        //     setEditPageList({...data[0]})
        //     setLoading1(false);
        // });
       
        initFilters1();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

  

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);
            return d;
        });
    };

    
    const initFilters1 = () => {
        setFilters1({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            representative: { value: null, matchMode: FilterMatchMode.IN },
            date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            verified: { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue1('');
    };

    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} severity="success"></Button>;
    };


    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    };

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    };

    const DeletePage=async()=>{
        const baseUrl=getBaseUrl(false)
        console.log(editPageList.page,editPageList.slug,editPageList.meta,editPageList.id)
        const data={"name":editPageList.name,"slug":editPageList.slug,"meta":editPageList.meta,id:editPageList._id,action:"deletepage"}
        console.log("request data in slug")
        setDeletePageDialog(false);
        setLoading1(true)
        await fetchJSON({
            method: "post",
            url: `${baseUrl}/api/builder/handle?type=delete&name=${editPageList.name}&folder=${currentDetails.name}`,
            data:data
        });
        await fetch("/api/auth/middleware",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({data})})
        const fetchPages=async()=>{
            const data={action:"getpages",websiteId:currentDetails._id}
            await fetch("/api/auth/middleware",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({data})})
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                setPageList(prevPageList => prevPageList.filter(page => page._id !== editPageList._id));

                setEditPageList(res.pages[0])
                console.log(pageList,"pageList")
                setLoading1(false); 

            })
        }
        fetchPages()
        // window.location.reload(true)
    }

    const UpdatePage=async()=>{
        const baseUrl=getBaseUrl(false)
        console.log(newFileName,pageSlug,metaDetails,editPageList.id,currentDetails,currentDetails.name)
        const data={"name":EditNewFileName,"slug":EditPageSlug,"meta":EditMetaDetail,id:editPageList._id,action:"updatepage"}
        console.log("request data in slug")
        setEditDialog(false);
        setLoading1(true)
        await fetch("/api/auth/middleware",{
            method: "POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({data})
        });
        await fetchJSON({
            method:"post",
            url:`${baseUrl}/api/builder/handle?type=update&new=${EditNewFileName}&old=${editPageList.name}&folder=${currentDetails.name}`
        })
        const fetchPages=async()=>{
            const data={action:"getpages",websiteId:currentDetails._id}
            await fetch("/api/auth/middleware",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({data})})
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                setPageList(prevPageList => {
                    const updatedPageIndex = prevPageList.findIndex(page => page._id === editPageList._id);
                    if (updatedPageIndex !== -1) {
                        const updatedPage = { ...prevPageList[updatedPageIndex], name: EditNewFileName, slug: EditPageSlug, meta: EditMetaDetail };
                        const newPageList = [...prevPageList];
                        newPageList[updatedPageIndex] = updatedPage;
                        return newPageList;
                    }
                    return prevPageList;
                });
                setEditPageList(res.pages[0])
                console.log(pageList,"pageList")
                setLoading1(false); 

            })
        }
        fetchPages()
        // window.location.reload(true)
    }
  
  const editButton = (rowData) => {
    // Handle edit logic here, using rowData.page to access the page value
    console.log('Edit:', rowData.page);
    localStorage.setItem("currentPage",currentDetails.name+"/"+rowData.name)
    router.push(`/site-list/${currentDetails.name}/editor`)
  };

  const EditRowButton = (rowData) => {
    // Handle delete logic here, using rowData.page to access the page value
    console.log('Delete:',rowData,EditNewFileName);
    setEditPageList( {...rowData});
    setEditNewFileName(rowData.name)
    setEditPageSlug(rowData.slug)
    setEditMetaDetail(rowData.meta)
    console.log(EditNewFileName,EditMetaDetail,EditPageSlug,"data")
    console.log(editPageList,"editPageList")
    setEditDialog(true);
  };
   
  const confirmDeletePage = (product) => {
    setEditPageList(product);
    setDeletePageDialog(true);
};
  

  const actionTemplate = (rowData) => {
    return (
      <div>
        <span className=" flex justify-between">
            <Button key={rowData.id}  icon="pi pi-pencil"  className=' rounded-full border-l-indigo-600' onClick={()=>EditRowButton(rowData)} />
            <Button  icon="pi pi-code" className=' rounded-full bg-blue-400 border-blue-400' onClick={()=>editButton(rowData)}/>
            <Button icon="pi pi-trash" className=' rounded-full bg-red-500 border-red-500' onClick={()=>confirmDeletePage(rowData)} />
        </span>
      </div>
    );
  };

    const activityFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        );
    };


    const HandleCreate=async()=>{
        console.log(pageSlug,pageSlug.length)
        setError(null)
        var isValid=false
        if(newFileName.trim()===""){
            setError("Enter Title")
        }else if(metaDetails.trim()===""){
             setError("Enter Description")
        }else if(newFileName.length!==0&&metaDetails.length!==0&&pageSlug.length!==0){
            isValid=true
        }
        console.log(isValid,newFileName.trim(),pageSlug)
        if(isValid){
        setDisplayBasic(false)
        setLoading1(true)
        const baseUrl=getBaseUrl(false)
        const data={"name":newFileName,"slug":pageSlug,"meta":metaDetails,action:"createpage",websiteId:currentDetails._id}
        await fetch("/api/auth/middleware",{
            method: "POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({data})
        });
        await fetchJSON({
            method: "get",
            url: `${baseUrl}/api/builder/handle?type=new&path=${newFileName}&folder=${currentDetails.name}`,
        });
        const fetchPages=async()=>{
            const data={action:"getpages",websiteId:currentDetails._id}
            await fetch("/api/auth/middleware",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({data})})
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                const newPages = res.pages.filter(newPage =>
                    !pageList.some(existingPage => existingPage._id === newPage._id)
                );
        
                setPageList(prevPageList => [...prevPageList, ...newPages]);
                console.log(pageList,"pageList")
                setLoading1(false); 
            })
        }
        fetchPages()
        // window.location.reload(true)
    }
    }

    const hideDialog = () => {
        setEditNewFileName("")
        setEditMetaDetail("")
        setEditPageSlug("")
        setSubmitted(false);
        setEditDialog(false);
    };

    const hideDeletePageDialog = () => {
        setDeletePageDialog(false);
    };

    const basicDialogFooter = <Button type="button" label="Create" onClick={HandleCreate} icon="pi pi-check" severity="secondary" />;
    const productDialogFooter = (
        <React.Fragment>
            {editPageList!==undefined&&editPageList.name===EditNewFileName&&editPageList.meta===EditMetaDetail?
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            :
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} disabled className=' cursor-not-allowed'/>
            }
            {
            editPageList!==undefined&&editPageList.name!==EditNewFileName||editPageList.meta!==EditMetaDetail?
            <Button label="Save" icon="pi pi-check" onClick={UpdatePage} />
            :
            <Button label="Save" icon="pi pi-check" onClick={UpdatePage} className=' cursor-not-allowed' disabled />
            }
            {/* <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={UpdatePage} /> */}
        </React.Fragment>
    );
    const deletePageDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeletePageDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={DeletePage}  />
        </React.Fragment>
    );

    const header1 = renderHeader1();

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Pages</h5>
                    <Button label="Add New" icon="pi pi-plus" className='mt-2 mb-2' onClick={() => setDisplayBasic(true)} />
                    {/* <div className="card"> */}
                        {/* <h5 >Create New Page</h5> */}
                        <Dialog header="Create New Page" visible={displayBasic} style={{ width: '30vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                        <div className="card p-fluid">
                    {/* <h5>Vertical</h5> */}
                    <div className="field">
                        <label htmlFor="name1">Title</label>
                        <InputText id="name1" type="text" onInput={(e)=>{setNewFileName(e.target.value);setPageSlug("/"+e.target.value)}} required />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Slug</label>
                        <InputText id="email1" type="text" value={"/"+newFileName} required readOnly onChange={(e)=>setPageSlug(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="age1">Description</label>
                        <InputText id="age1" type="text" onInput={(e)=>setMetaDetail(e.target.value)} required />
                    </div>
                    {/* {Error&&<span className="error-message text-red-600 text-lg">{Error}</span>} */}
                    {Error&&<EmptyError color="error" text={Error} />}
                </div>
                </Dialog>
               < Dialog visible={editDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
               <div className="field">
                        <label htmlFor="name1">Title</label>
                        <InputText id="name1" type="text" defaultValue={editPageList?.name??""}   onChange={(e) => {setEditNewFileName(e.target.value);setEditPageSlug("/"+e.target.value)}} />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Slug</label>
                        <InputText id="email1" type="text"      value={EditPageSlug} readOnly/>
                    </div>
                    <div className="field">
                        <label htmlFor="age1">Description</label>
                        <InputText id="age1" type="text" defaultValue={editPageList?.meta??""}  onInput={(e) => setEditMetaDetail(e.target.value)} />
                    </div>
               </Dialog>
               <Dialog visible={deletePageDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deletePageDialogFooter} onHide={hideDeletePageDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {editPageList && (
                        <span>
                            Are you sure you want to delete <b>{editPageList.page}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
                        {/* <div className="grid">
                            <div className="col-12">
                                <Button type="button" label="Show" icon="pi pi-external-link" onClick={() => setDisplayBasic(true)} />
                            </div>
                        </div> */}
                    {/* </div> */}
                    <DataTable
                        value={pageList}
                        paginator
                        className="p-datatable-gridlines"
                        showGridlines
                        rows={10}
                        dataKey="id"
                        filters={filters1}
                        filterDisplay="menu"
                        loading={loading1}
                        responsiveLayout="scroll"
                        emptyMessage="No Page List found"
                        header={header1}
                        // onClick={(e)=>handleEditClic(e)}
                    >
                        <Column field="name" header="Title" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                        <Column header="Slug" field='slug' filterField="country.name" style={{ minWidth: '12rem' }}  filter filterPlaceholder="Search by country" filterClear={filterClearTemplate} filterApply={filterApplyTemplate} />
                        <Column header="Date" filterField="date" field='createdAt' dataType="date" style={{ minWidth: '10rem' }}  filter filterElement={dateFilterTemplate} />
                        <Column field="status" value="new" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                        <Column field="activity" header="Actions" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={actionTemplate} filter filterElement={activityFilterTemplate} />
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default EditorTable;
