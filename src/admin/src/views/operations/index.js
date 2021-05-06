import React, { useState } from 'react'
import {
    CBadge,
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
    CButton,
    CCollapse,
    CInput
} from '@coreui/react';
import operationsData from './operationsData';

const getBadge = status => {
    switch (status) {
        case 'Concluida': return 'success'
        case 'Pendiente': return 'warning'
        case 'Cancelada': return 'danger'
        default: return 'primary'
    }
}

const fieldsTodos = [
    {
        key: 'id_user',
        label: 'ID Usuario',
        sorter: true,
        filter: true
    },
    {
        key: 'type',
        label: 'Tipo',
    },
    {
        key: 'amount',
        label: 'Monto',
        sorter: true,
        filter: true
    },
    {
        key: 'date',
        label: 'Fecha',
    },
    {
        key: 'status',
        label: 'Estado',
    },
]

const fieldsIncome = [
    {
        key: 'id_user',
        label: 'ID Usuario',
        sorter: true,
        filter: true
    },
    {
        key: 'amount',
        label: 'Monto',
        sorter: true,
        filter: true
    },
    {
        key: 'date',
        label: 'Fecha',
    },
    {
        key: 'info',
        label: 'Más información',
        sorter: false,
        filter: false,
    }
]

const fieldsOutcome = [
    {
        key: 'id_user',
        label: 'ID Usuario',
        sorter: true,
        filter: true
    },
    {
        key: 'type',
        label: 'Tipo',
    },
    {
        key: 'amount',
        label: 'Monto',
        sorter: true,
        filter: true
    },
    {
        key: 'date',
        label: 'Fecha',
    },
    {
        key: 'status',
        label: 'Estado',
    },
    {
        key: 'balance',
        label: 'Saldo remanente'
    },
    {
        key: 'info',
        label: '',
        _style: { width: '1%' },
        sorter: false,
        filter: false,
    },
]

const Operations = () => {
    const dataIncome = operationsData.filter((item) => item.type === 'income')
    const dataOutcome = operationsData.filter((item) => item.type === 'outcome')

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
                        <h2>Operaciones</h2>
                    </CCardHeader>
                    <CCardBody>
                        <CTabs activeTab="all">
                            <CNav variant="tabs">
                                <CNavItem>
                                    <CNavLink data-tab="all">
                                        Todas
                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="income">
                                        Ingresos
                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="outcome">
                                        Egresos
                  </CNavLink>
                                </CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane data-tab="all">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={operationsData}
                                                        fields={fieldsTodos}
                                                        hover
                                                        striped
                                                        bordered
                                                        sorter
                                                        columnFilter
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
                                <CTabPane data-tab="income">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={dataIncome}
                                                        fields={fieldsIncome}
                                                        hover
                                                        striped
                                                        columnFilter
                                                        sorter
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
                                <CTabPane data-tab="outcome">
                                    <CRow>
                                        <CCol>
                                            <CCard>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={dataOutcome}
                                                        fields={fieldsOutcome}
                                                        hover
                                                        striped
                                                        columnFilter
                                                        sorter
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
                                                            'info':
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
                                                                                    {item.id}
                                                                                </h4>
                                                                                <p className="text-muted">{item.ref ? `El número de referencia es ${item.ref}` : 'No ha establecido un número de referencia'}</p>
                                                                                {!item.ref ? (
                                                                                    <CRow>
                                                                                        <CCol sm='12' md='6'>
                                                                                            <CInput placeholder='Número de referencia' type='text' size='sm' className='mr-3' />
                                                                                        </CCol>
                                                                                        <CCol sm='12' md='6'>
                                                                                            <CButton size='sm' color='info'>
                                                                                                Confirmar pago
                                                                                            </CButton>
                                                                                            <CButton size='sm' color='danger' className='ml-1'>
                                                                                                Cancelar pago
                                                                                            </CButton>
                                                                                        </CCol>
                                                                                    </CRow>
                                                                                ) : (
                                                                                    <div>
                                                                                        <p>El número de referencia es {item.ref}</p>
                                                                                        <p>El pagado el {item.date}</p>
                                                                                    </div>
                                                                                )
                                                                                }
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

export default Operations
