import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
} from '@coreui/react';
import consultsData from './consultsData';

const getBadge = status => {
    switch (status) {
        case 'Online': return 'success'
        case 'Offline': return 'secondary'
        case 'Ocupado': return 'warning'
        case 'Ausente': return 'danger'
        default: return 'primary'
    }
}
const fields = [
    {
        key: 'name_client',
        label: 'Nombre Cliente',
    },
    {
        key: 'id_client',
        label: 'ID Cliente',
    },
    {
        key: 'name_consultant',
        label: 'Nombre Consultor',
    },
    {
        key: 'id_consultant',
        label: 'ID Consultor',
    },
    {
        key: 'search',
        label: 'Busqueda',
    },
    {
        key: 'date',
        label: 'Fecha',
    },
    {
        key: 'duration',
        label: 'Duración',
    },
    {
        key: 'amount',
        label: 'Total',
    }
]

const Consults = () => {
    return (
        <>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            <h2>
                                Consultas
                            </h2>
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={consultsData}
                                fields={fields}
                                hover
                                striped
                                bordered
                                columnFilter
                                sorter
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
        </>
    )
}

export default Consults;
