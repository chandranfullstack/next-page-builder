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
import { CustomerService } from '../../../demo/service/CustomerService';
import { ProductService } from '../../../demo/service/ProductService';
import { Dialog } from 'primereact/dialog';
import { getBaseUrl } from '../../../helpers/url';
import { fetchJSON } from '../../../helpers/crud';
import { getPageNames } from '../../../demo/service/fileNames';
import { useRouter } from 'next/router';
import { LayoutContext } from '../../../layout/context/layoutcontext';

import { InputText } from 'primereact/inputtext';
import Image from "next/image"

const TableDemo = () => {
    const [customers1, setCustomers1] = useState(null);
    const [customers2, setCustomers2] = useState([]);
    const [customers3, setCustomers3] = useState([]);
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
    const {currentPage,setCurrentPage}=useContext(LayoutContext)
    const [editPageList, setEditPageList] = useState([]);
    const [editDialog, setEditDialog] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [deletePageDialog, setDeletePageDialog] = useState(false);

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
        setLoading2(true);

        CustomerService.getCustomersLarge().then((data) => {
            setCustomers1(getCustomers(data));
            setLoading1(false);
        });
        getPageNames().then((data) => {
            setPageList(data)
            console.log(pageList,"pageList",data)
            setEditPageList({...data[0]})
            setLoading1(false);
        });
        CustomerService.getCustomersLarge().then((data) => {
            setCustomers2(getCustomers(data));
            setLoading2(false);
        });
        CustomerService.getCustomersMedium().then((data) => setCustomers3(data));
        ProductService.getProductsWithOrdersSmall().then((data) => setProducts(data));

        initFilters1();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

  

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);
            return d;
        });
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Image alt="flag" src={`/demo/images/flag/flag_placeholder.png`} className={`flag flag-${rowData.country.code}`} width={30} height={80} />
                <span style={{ marginLeft: '.5em', verticalAlign: 'middle' }}>{rowData.country.name}</span>
            </React.Fragment>
        );
    };

    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} severity="success"></Button>;
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;
        return (
            <React.Fragment>
                <Image
                    alt={representative.name}
                    src={`/demo/images/avatar/${representative.image}`}
                    onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                    width={32}
                    height={20}
                    style={{ verticalAlign: 'middle' }}
                />
                <span style={{ marginLeft: '.5em', verticalAlign: 'middle' }}>{representative.name}</span>
            </React.Fragment>
        );
    };

    const representativeFilterTemplate = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Agent Picker</div>
                <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </>
        );
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <Image alt={option.name} src={`/demo/images/avatar/${option.image}`} width={32} height={30} style={{ verticalAlign: 'middle' }} />
                <span style={{ marginLeft: '.5em', verticalAlign: 'middle' }}>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
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

    const handleEditClic=(e)=>{
        console.log(e.target.value,e.target)
        // localStorage.setItem("currentPage",e.target.value)
        // setCurrentPage(e.target.value)
       // console.log(currentPage,"currentPage")
       // router.push("/page-list/editor")
    }

    const DeletePage=async()=>{
        const baseUrl=getBaseUrl(false)
        console.log(editPageList.page,editPageList.slug,editPageList.meta,editPageList.id)
        const data={"name":editPageList.page,"slug":editPageList.slug,"meta":editPageList.meta,id:editPageList.id}
        console.log("request data in slug")
        setDeletePageDialog(false);
        const data1 = await fetchJSON({
            method: "post",
            url: `${baseUrl}/api/builder/handle?type=delete&id=${editPageList.id}`,
            data:data
          });
        window.location.reload(true)
    }

    const UpdatePage=async()=>{
        const baseUrl=getBaseUrl(false)
        console.log(newFileName,pageSlug,metaDetails,editPageList.id)
        const data={"name":newFileName,"slug":pageSlug,"meta":metaDetails,id:editPageList.id,date:editPageList.date}
        console.log("request data in slug")
        setEditDialog(false);
        const data1 = await fetchJSON({
            method: "post",
            url: `${baseUrl}/api/builder/handle?type=update&id=${editPageList.id}`,
            data:data
        });
        window.location.reload(true)
    }

    const activityBodyTemplate = (rowData) => {
        // console.log(rowData.page)
        return(
            <span className=" flex justify-between">
                        <Button key={rowData.id} value={rowData.page} icon="pi pi-pencil"  className=' rounded-full border-l-indigo-600' onClick={(e)=>handleEditClic(e)} />
                        <Button  icon="pi pi-pencil" className=' rounded-full bg-blue-400 border-blue-400' />
                        <Button icon="pi pi-trash" className=' rounded-full bg-red-500 border-red-500' />
                    </span>
        )
    };


    
  const editButton = (rowData) => {
    // Handle edit logic here, using rowData.page to access the page value
    console.log('Edit:', rowData.page);
    localStorage.setItem("currentPage",rowData.page)
    router.push("/page-list/editor")
  };

  const EditRowButton = (rowData) => {
    // Handle delete logic here, using rowData.page to access the page value
    console.log('Delete:',rowData);
    setEditPageList({ ...rowData});
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
        {/* <button onClick={() => editButton(rowData)}>Edit</button> */}
        {/* <button onClick={() => deleteButton(rowData)}>Delete</button> */}
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

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-pink-500 pi-times-circle': !rowData.verified })}></i>;
    };

    const verifiedFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterCallback(e.value)} />;
    };


    const HandleCreate=async()=>{
        //const page=await getPageNames()
        //console.log(page)
        //page.map((i)=>console.log(i,"i"))
        setDisplayBasic(false)
        console.log(newFileName,metaDetails,pageSlug)
        const baseUrl=getBaseUrl(false)
        const data={"name":newFileName,"slug":pageSlug,"meta":metaDetails,id:pageList.length+1}
        console.log("request data in slug")
        const data1 = await fetchJSON({
            method: "post",
            url: `${baseUrl}/api/builder/handle?type=file&path=${newFileName}`,
            data:data
          });
          console.log(data1,"data1")
        const res = await fetchJSON({
            method: "get",
            url: `${baseUrl}/api/builder/handle?type=new&path=${newFileName}`,
          });
        window.location.reload(true)
    }

    const hideDialog = () => {
        setSubmitted(false);
        setEditDialog(false);
    };

    const hideDeletePageDialog = () => {
        setDeletePageDialog(false);
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _list= { ...editPageList };

        _list[`${name}`] = val;

        setEditPageList(_list);
    };

    const basicDialogFooter = <Button type="button" label="Create" onClick={HandleCreate} icon="pi pi-check" severity="secondary" />;
    const productDialogFooter = (
        <React.Fragment>
            {editPageList.page===newFileName&&editPageList.meta===metaDetails&&
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            }
            {
            editPageList.page!==newFileName&&editPageList.meta!==metaDetails&&
            <Button label="Save" icon="pi pi-check" onClick={UpdatePage} />
            }
            
            
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
                        <InputText id="name1" type="text" onInput={(e)=>setNewFileName(e.target.value)} required />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Slug</label>
                        <InputText id="email1" type="text" onInput={(e)=>setPageSlug(e.target.value)} required />
                    </div>
                    <div className="field">
                        <label htmlFor="age1">Description</label>
                        <InputText id="age1" type="text" onInput={(e)=>setMetaDetail(e.target.value)} required />
                    </div>
                </div>
                </Dialog>
               < Dialog visible={editDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
               <div className="field">
                        <label htmlFor="name1">Title</label>
                        <InputText id="name1" type="text" defaultValue={editPageList.page}  onChange={(e) => setNewFileName(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Slug</label>
                        <InputText id="email1" type="text" defaultValue={editPageList.slug}   onChange={(e) => setPageSlug(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="age1">Description</label>
                        <InputText id="age1" type="text" defaultValue={editPageList.meta}  onChange={(e) => setMetaDetail(e.target.value)} />
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
                        <Column field="page" header="Title" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                        <Column header="Slug" field='slug' filterField="country.name" style={{ minWidth: '12rem' }}  filter filterPlaceholder="Search by country" filterClear={filterClearTemplate} filterApply={filterApplyTemplate} />
                        <Column header="Date" filterField="date" field='date' dataType="date" style={{ minWidth: '10rem' }}  filter filterElement={dateFilterTemplate} />
                        <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                        <Column field="activity" header="Actions" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={actionTemplate} filter filterElement={activityFilterTemplate} />
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default TableDemo;
