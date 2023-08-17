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
import { fetchWeb } from '../../demo/service/siteManager';
import { InputText } from 'primereact/inputtext';
import Image from "next/image"

const SiteTable = () => {
    const [pageList, setPageList] = useState([]);
    const [filters1, setFilters1] = useState(null);
    const [loading1, setLoading1] = useState(true);
    const [globalFilterValue1, setGlobalFilterValue1] = useState('');
    const [displayBasic, setDisplayBasic] = useState(false);
    const [newFileName,setNewFileName]=useState("")
    const [pageSlug,setPageSlug]=useState("")
    const [metaDetails,setMetaDetail]=useState("")
    const router=useRouter()
    const {currentPage,setCurrentPage,UserDetails,currentDetails,setCurrentDetails}=useContext(LayoutContext)
    const [editPageList, setEditPageList] = useState([]);
    const [editDialog, setEditDialog] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [deletePageDialog, setDeletePageDialog] = useState(false);
    const [Error,setError]=useState(null)
    const [EditNewFileName, setEditNewFileName] = useState(editPageList!==undefined?editPageList.name:"");
    const [EditPageSlug, setEditPageSlug] = useState(editPageList!==undefined?editPageList.slug:"");
    const [EditMetaDetail, setEditMetaDetail] = useState(editPageList);
    

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
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined  />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    useEffect(() => {
        const getDetails=()=>{
        fetchWeb(UserDetails.user.id).then((data)=>{
            setPageList(data.websites)
            setEditPageList(data.websites[0])
            console.log(pageList,"pageList",data,editPageList,typeof(data))
            setLoading1(false)
        })
        }
        getDetails()
    }, []); 


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
        console.log(editPageList.page,editPageList.slug,editPageList.meta,editPageList._id)
        const data={"name":editPageList.name,"slug":editPageList.domain,id:editPageList._id,action:"deleteweb"}
        console.log("request data in slug")
        setDeletePageDialog(false);
        const data1 = await fetch(`/api/auth/middleware`,{
            method: "post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({data})
        });
        await fetchJSON({
            method: "DELETE",
            url: `${baseUrl}/api/builder/handle?type=folder&name=${editPageList.name}`,
            data:data
        });
        setLoading1(true)
        const getDetails=()=>{
            fetchWeb(UserDetails.user.id).then((data)=>{
                setPageList(data.websites)
                setEditPageList(data.websites[0])
                console.log(pageList,"pageList",data,editPageList,typeof(data))
                setLoading1(false)
            })
        }
        getDetails()
        // window.location.reload(true)
    }

    const UpdatePage=async()=>{
        const baseUrl=getBaseUrl(false)
        console.log(newFileName,pageSlug,editPageList.id,editPageList)
        const data={"name":EditNewFileName,"slug":EditPageSlug,id:editPageList._id,action:"editweb",oldName:editPageList.name}
        console.log("request data in slug")
        setEditDialog(false);
        const data1 = await fetch(`/api/auth/middleware`,{
            method: "post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({data})
        });
        await fetchJSON({
            method: "PUT",
            url: `${baseUrl}/api/builder/handle?type=folder&oldName=${editPageList.name}&name=${EditNewFileName}`,
            data:data
          });
        setLoading1(true)
        const getDetails=()=>{
            fetchWeb(UserDetails.user.id).then((data)=>{
                setPageList(data.websites)
                setEditPageList(data.websites[0])
                console.log(pageList,"pageList",data,editPageList,typeof(data))
                setLoading1(false)
            })
        }
        getDetails()
        // window.location.reload(true)
    }
  
  const editButton = (rowData) => {
    console.log('Edit:', rowData);
    localStorage.setItem("currentPage",rowData.page)
    setCurrentDetails(rowData)
    console.log(currentDetails,currentDetails.name,"site table edior button")
    router.push(`site-list/${rowData.name}`)
  };

  const EditRowButton = (rowData) => {
    // Handle delete logic here, using rowData.page to access the page value
    console.log('Delete:',rowData,EditNewFileName);
    setEditPageList(rowData);
    setEditNewFileName(rowData.name)
    setEditPageSlug(rowData.domain)
    console.log(EditNewFileName,EditMetaDetail,EditPageSlug,"data",rowData.name)
    console.log(editPageList,"editPageList",EditNewFileName)
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
        console.log(pageSlug,UserDetails,typeof(pageSlug),typeof(newFileName))
        setError(null)
        var isValid=false
        if(newFileName.trim()===""){
            setError("Enter Title")
        }else if(newFileName.length!==0&&pageSlug.length!==0){
            isValid=true
        }
        console.log(isValid,newFileName.trim(),pageSlug)
        if(isValid){
        setDisplayBasic(false)
        const baseUrl=getBaseUrl(false)
        const data={"name":newFileName,"slug":pageSlug,id:pageList.length+1,action:"newweb",owner:UserDetails.user.email}
        await fetch("/api/auth/middleware?type=new",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({data})})
        await fetchJSON({
            method: "POST",
            url: `${baseUrl}/api/builder/handle?type=folder&name=${newFileName}`,
            data:{name:newFileName}
          })
          setLoading1(true)
          const getDetails=()=>{
            fetchWeb(UserDetails.user.id).then((data)=>{
                setPageList(data.websites)
                setEditPageList(data.websites[0])
                console.log(pageList,"pageList",data,editPageList,typeof(data))
                setLoading1(false)
            })
            }
            getDetails()
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
            {editPageList!==undefined&&editPageList.name===EditNewFileName?
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            :
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} disabled className=' cursor-not-allowed'/>
            }
            {
            editPageList!==undefined&&editPageList.name!==EditNewFileName?
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
                    <h5>Sites</h5>
                    <Button label="create site" icon="pi pi-plus" className='mt-2 mb-2' onClick={() => setDisplayBasic(true)} />
                        <Dialog header="Create New Site" visible={displayBasic} style={{ width: '30vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                        <div className="card p-fluid">
                    <div className="field">
                        <label htmlFor="name1">Name</label>
                        <InputText id="name1" type="text" value={newFileName} onInput={(e)=>{setNewFileName(e.target.value);setPageSlug("/"+e.target.value)}}  />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Slug</label>
                        <InputText id="email1" type="text" value={"/"+newFileName} required readOnly onChange={(e)=>setPageSlug(e.target.value)} />
                    </div>
                    {Error&&<EmptyError color="error" text={Error} />}
                </div>
                </Dialog>
               < Dialog visible={editDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
               <div className="field">
                        <label htmlFor="name1">Name</label>
                        <InputText id="name1" type="text" value={EditNewFileName}  onChange={(e) => {setEditNewFileName(e.target.value);setEditPageSlug("/"+e.target.value)}} />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Slug</label>
                        <InputText id="email1" type="text"      value={EditPageSlug} readOnly/>
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
                    >
                        <Column field="name" header="Title" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                        <Column header="Slug" field='domain' filterField="country.name" style={{ minWidth: '12rem' }}  filter filterPlaceholder="Search by country" filterClear={filterClearTemplate} filterApply={filterApplyTemplate} />
                        <Column header="Date" filterField="date" field='createdAt' dataType="date" style={{ minWidth: '10rem' }}  filter filterElement={dateFilterTemplate} />
                        <Column field="status" header="Status"  filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                        <Column field="activity" header="Actions" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={actionTemplate} filter filterElement={activityFilterTemplate} />
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default SiteTable;
