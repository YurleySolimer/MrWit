import React, { useState } from 'react'
import {
    CBadge,
    CButton,
    CCollapse,
    CInput,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CTabs,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CDataTable,
    CRow,
    CLabel
} from '@coreui/react';
import usersData from './usersData';

const getBadge = status => {
    switch (status) {
        case 'Online': return 'success'
        case 'Offline': return 'secondary'
        case 'Ocupado': return 'warning'
        case 'Ausente': return 'danger'
        default: return 'primary'
    }
}
const fieldsTodos = [
    {
        key: 'name',
        label: 'Nombre',
        sorter: true,
        filter: true
    },
    {
        key: 'register',
        label: 'Registro',
    },
    {
        key: 'type',
        label: 'Tipo',
        sorter: true,
        filter: true
    },
    {
        key: 'last_session',
        label: 'Ultima sesión',
    },
    {
        key: 'duration',
        label: 'Duración',
        sorter: true,
        filter: true
    },
    {
        key: 'status',
        label: 'Estado',
    },
]
const fieldsCliente = [
    {
        key: 'name',
        label: 'Nombre',
        sorter: true,
        filter: true
    },
    {
        key: 'register',
        label: 'Registro',
    },
    {
        key: 'location',
        label: 'Ubicación',
        sorter: true,
        filter: true
    },
    {
        key: 'last_session',
        label: 'Ultima sesión',
    },
    {
        key: 'duration',
        label: 'Duración',
        sorter: true,
        filter: true
    },
    {
        key: 'status',
        label: 'Estado',
    },
]
const fieldsConsultor = [
    {
        key: 'name',
        label: 'Nombre',
        sorter: true,
        filter: true
    },
    {
        key: 'register',
        label: 'Registro',
    },
    {
        key: 'sector',
        label: 'Sector',
        sorter: true,
        filter: true
    },
    {
        key: 'profession',
        label: 'Profesión',
    },
    {
        key: 'last_session',
        label: 'Ultima sesión',
    },
    {
        key: 'duration',
        label: 'Duración',
        sorter: true,
        filter: true
    },
    {
        key: 'status',
        label: 'Estado',
    },
]
const fieldsPendientes = [
    {
        key: 'name',
        label: 'Nombre',
        sorter: true,
        filter: true
    },
    {
        key: 'register',
        label: 'Registro',
    },
    {
        key: 'sector',
        label: 'Sector',
        sorter: true,
        filter: true
    },
    {
        key: 'profession',
        label: 'Profesión',
    },
    {
        key: 'especialidad',
        label: 'Especialidad',
    },
    {
        key: 'cv',
        label: 'Hoja de vida',
        sorter: false,
        filter: false,
    },
    {
        key: 'approvation',
        label: 'Aprobación',
        sorter: false,
        filter: false
    }
]

const Users = () => {
    const dataClients = usersData.filter((item) => item.type === 'Cliente')
    const dataConsultants = usersData.filter((item) => item.type === 'Consultor')

    const [details, setDetails] = useState([]);


    const toggleDetails = (idx) => {
        const position = details.indexOf(idx)
        let newDetails = details.slice()

        if (position !== -1) {
            newDetails.splice(position, 1)
        } else {
            newDetails = [...details, idx]
        }

        setDetails(newDetails)
    }

    return (
        <>

            <CCol xs="12" md="12" className="mb-4">
                <CCard>
                    <CCardHeader>
                        <h2>
                        Usuarios
                        </h2>
          </CCardHeader>
                    <CCardBody>
                        <CTabs activeTab="todos">
                            <CNav variant="tabs">
                                <CNavItem>
                                    <CNavLink data-tab="todos">
                                        Todos
                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="clientes">
                                        Clientes
                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="consultores">
                                        Consultores
                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="pendientes">
                                        Pendientes
                  </CNavLink>
                                </CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane data-tab="todos">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={usersData}
                                                        fields={fieldsTodos}
                                                        hover
                                                        columnFilter
                                                        sorter
                                                        striped
                                                        bordered
                                                        size="sm"
                                                        itemsPerPage={10}
                                                        pagination
                                                        scopedSlots={{
                                                            'status':
                                                                (item) => (
                                                                    <td>
                                                                        <CBadge color={getBadge(item.status)}>
                                                                            {item.status}
                                                                        </CBadge>
                                                                    </td>
                                                                )
                                                        }}
                                                    />
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                </CTabPane>
                                <CTabPane data-tab="clientes">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={dataClients}
                                                        fields={fieldsCliente}
                                                        hover
                                                        columnFilter
                                                        sorter
                                                        striped
                                                        bordered
                                                        size="sm"
                                                        itemsPerPage={10}
                                                        pagination
                                                        scopedSlots={{
                                                            'status':
                                                                (item) => (
                                                                    <td>
                                                                        <CBadge color={getBadge(item.status)}>
                                                                            {item.status}
                                                                        </CBadge>
                                                                    </td>
                                                                )
                                                        }}
                                                    />
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                </CTabPane>
                                <CTabPane data-tab="consultores">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={dataConsultants}
                                                        fields={fieldsConsultor}
                                                        hover
                                                        columnFilter
                                                        sorter
                                                        striped
                                                        bordered
                                                        size="sm"
                                                        itemsPerPage={10}
                                                        pagination
                                                        scopedSlots={{
                                                            'status':
                                                                (item) => (
                                                                    <td>
                                                                        <CBadge color={getBadge(item.status)}>
                                                                            {item.status}
                                                                        </CBadge>
                                                                    </td>
                                                                )
                                                        }}
                                                    />
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                </CTabPane>
                                <CTabPane data-tab="pendientes">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={dataConsultants}
                                                        fields={fieldsPendientes}
                                                        hover
                                                        columnFilter
                                                        sorter
                                                        striped
                                                        bordered
                                                        size="sm"
                                                        itemsPerPage={10}
                                                        pagination
                                                        scopedSlots={{
                                                            'status':
                                                                (item) => (
                                                                    <td>
                                                                        <CBadge color={getBadge(item.status)}>
                                                                            {item.status}
                                                                        </CBadge>
                                                                    </td>
                                                                ),
                                                                'approvation':
                                                                (item, idx) => {
                                                                    return (
                                                                        <td className='py-2'>
                                                                            <CButton
                                                                                color='primary'
                                                                                variant='outline'
                                                                                shape='square'
                                                                                size='sm'
                                                                                onClick={() => { toggleDetails(idx) }}
                                                                            >
                                                                                {details.includes(idx) ? 'Ocultar' : 'Mostrar'}
                                                                            </CButton>
                                                                        </td>
                                                                    )
                                                                },
                                                            'details':
                                                                (item, idx) => {
                                                                    return (
                                                                        <CCollapse show={details.includes(idx)}>
                                                                            <CCardBody>
                                                                                <h4>
                                                                                    Aprobar a {item.name}
                                                                                </h4>
                                                                                <p className="text-muted">Para aprobar a este consultor por favor aclara la siguiente información</p>
                                                                                    <CRow>
                                                                                        <CCol sm='12' md='4'>
                                                                                            <CLabel htmlFor='sector'>Sector</CLabel>
                                                                                            <CInput name='sector' id='sector' placeholder={item.sector} type='text' size='sm' className='mr-3' />
                                                                                        </CCol>
                                                                                        <CCol sm='12' md='4'>
                                                                                            <CLabel htmlFor='profession'>Profesión</CLabel>
                                                                                            <CInput name='profession' id='profession' placeholder={item.profession} type='text' size='sm' className='mr-3' />
                                                                                        </CCol>
                                                                                        <CCol sm='12' md='4'>
                                                                                            <CLabel htmlFor='especialidad'>Especialidad</CLabel>
                                                                                            <CInput name='especialidad' id='especialidad' placeholder={item.especialidad} type='text' size='sm' className='mr-3' />
                                                                                        </CCol>
                                                                                        <CCol sm='12' md='12' className='mt-3'>
                                                                                            <CButton size='sm' color='info'>
                                                                                                Aprobar
                                                                                            </CButton>
                                                                                            <CButton size='sm' color='danger' className='ml-1'>
                                                                                                Rechazar
                                                                                            </CButton>
                                                                                        </CCol>
                                                                                    </CRow>
                                                                            </CCardBody>
                                                                        </CCollapse>
                                                                    )
                                                                }
                                                        }}
                                                    />
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    </CRow>
                                </CTabPane>
                            </CTabContent>
                        </CTabs>
                    </CCardBody>
                </CCard>
            </CCol>

        </>
    )
}

export default Users
