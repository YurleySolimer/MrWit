import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
} from '@coreui/react';
import { Link } from 'react-router-dom';
import teamData from './teamData';

const fields = [
    {
        key: 'name',
        label: 'Nombre',
    },
    {
        key: 'email',
        label: 'Correo',
    },
    {
        key: 'functions',
        label: 'Funciones',
    },
    {
        key: 'last_login',
        label: 'Último ingreso',
    },
    {
        key: 'edit',
        label: 'Editar',
    },
    {
        key: 'delete',
        label: 'Borrar',
    }
]

const Team = () => {
    return (
        <>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>
                        <CRow>
                        <CCol xs='12' sm='10' md='10'>
                            <h2>
                            Equipo
                            </h2>
                </CCol>
                        <CCol xs='12' sm='2' md='2' className="mb-3 mb-xl-0 text-center">
                            <Link to='/equipo/nuevo'>
                                <CButton color="secondary">Nuevo miembro</CButton>
                            </Link>
                        </CCol>
                    </CRow>
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={teamData}
                                fields={fields}
                                hover
                                columnFilter
                                sorter
                                striped
                                bordered
                                size="sm"
                                itemsPerPage={10}
                                pagination
                                scopedSlots={{
                                    'edit':
                                        (item) => (
                                            <td>
                                                <CButton color='primary' size='sm' value={item.id}>
                                                    Editar
                                                </CButton>
                                            </td>
                                        ),
                                    'delete':
                                        (item) => (
                                            <td>
                                                <CButton color='danger' size='sm' value={item.id}>
                                                    Borrar
                                                </CButton>
                                            </td>
                                        ),
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Team;
