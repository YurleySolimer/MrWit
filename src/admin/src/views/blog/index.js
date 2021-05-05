
import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CCollapse,
    CButton,
    CLink
} from '@coreui/react';
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react';


const Blog = () => {
    const [collapsed, setCollapsed] = React.useState(true)

    return (
        <>
            <CCard>
                <CCardHeader>
                    <CRow>
                        <CCol xs='12' sm='10' md='10'>
                            <h2>
                            Blog
                            </h2>
                </CCol>
                        <CCol xs='12' sm='2' md='2' className="mb-3 mb-xl-0 text-center">
                            <Link to='/blog/nueva'>
                                <CButton color="secondary">Nueva entrada</CButton>
                            </Link>
                        </CCol>
                    </CRow>
                </CCardHeader>
                <CCardBody>
                    <CRow>

                        <CCol xs="12" sm="6" md="4">
                            <CCard>
                                <CCardHeader>
                                    Blog title
                <div className="card-header-actions">
                                        <CLink className="card-header-action">
                                            <CIcon name="cil-settings" />
                                        </CLink>
                                        <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                                            <CIcon name={collapsed ? 'cil-chevron-bottom' : 'cil-chevron-top'} />
                                        </CLink>
                                    </div>
                                </CCardHeader>
                                <CCollapse show={collapsed}>
                                    <CCardBody>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CCardBody>
                                </CCollapse>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" md="4">
                            <CCard>
                                <CCardHeader>
                                    Blog title
                <div className="card-header-actions">
                                        <CLink className="card-header-action">
                                            <CIcon name="cil-settings" />
                                        </CLink>
                                        <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                                            <CIcon name={collapsed ? 'cil-chevron-bottom' : 'cil-chevron-top'} />
                                        </CLink>
                                    </div>
                                </CCardHeader>
                                <CCollapse show={collapsed}>
                                    <CCardBody>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CCardBody>
                                </CCollapse>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" md="4">
                            <CCard>
                                <CCardHeader>
                                    Blog title
                <div className="card-header-actions">
                                        <CLink className="card-header-action">
                                            <CIcon name="cil-settings" />
                                        </CLink>
                                        <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                                            <CIcon name={collapsed ? 'cil-chevron-bottom' : 'cil-chevron-top'} />
                                        </CLink>
                                    </div>
                                </CCardHeader>
                                <CCollapse show={collapsed}>
                                    <CCardBody>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CCardBody>
                                </CCollapse>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" md="4">
                            <CCard>
                                <CCardHeader>
                                    Blog title
                <div className="card-header-actions">
                                        <CLink className="card-header-action">
                                            <CIcon name="cil-settings" />
                                        </CLink>
                                        <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                                            <CIcon name={collapsed ? 'cil-chevron-bottom' : 'cil-chevron-top'} />
                                        </CLink>
                                    </div>
                                </CCardHeader>
                                <CCollapse show={collapsed}>
                                    <CCardBody>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CCardBody>
                                </CCollapse>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" md="4">
                            <CCard>
                                <CCardHeader>
                                    Blog title
                <div className="card-header-actions">
                                        <CLink className="card-header-action">
                                            <CIcon name="cil-settings" />
                                        </CLink>
                                        <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                                            <CIcon name={collapsed ? 'cil-chevron-bottom' : 'cil-chevron-top'} />
                                        </CLink>
                                    </div>
                                </CCardHeader>
                                <CCollapse show={collapsed}>
                                    <CCardBody>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CCardBody>
                                </CCollapse>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" md="4">
                            <CCard>
                                <CCardHeader>
                                    Blog title
                <div className="card-header-actions">
                                        <CLink className="card-header-action">
                                            <CIcon name="cil-settings" />
                                        </CLink>
                                        <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                                            <CIcon name={collapsed ? 'cil-chevron-bottom' : 'cil-chevron-top'} />
                                        </CLink>
                                    </div>
                                </CCardHeader>
                                <CCollapse show={collapsed}>
                                    <CCardBody>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CCardBody>
                                </CCollapse>
                            </CCard>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </>
    )
}

export default Blog;

