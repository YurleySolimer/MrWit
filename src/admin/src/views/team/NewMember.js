import React from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CInput,
    CInputFile,
    CLabel,
    CRow,
    CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

const NewMember = () => {
    return (
        <>
            <CRow>
                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            <h2>Nuevo miembro</h2>
                        </CCardHeader>
                        <CCardBody>
                            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="name-input">Nombre</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="name-input" name="name-input" placeholder="Ingresa tu nombre" />
                                        <CFormText>Recuerda incluir tus apellidos</CFormText>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="email-input">Email</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="email" id="email-input" name="email-input" placeholder="Ingresa tu Email" autoComplete="email" />
                                        <CFormText className="help-block">Por favor, escribe tu correo electrónico</CFormText>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="password-input">Cédula</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="number" id="dni-input" name="dni-input" placeholder="Cédula de ciudadanía" autoComplete="dni" />
                                        <CFormText className="help-block">Ingresa el documento de identidad</CFormText>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="date-input">Fecha de nacimiento</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CLabel col md="3" htmlFor="file-input">Foto de perfil</CLabel>
                                    <CCol xs="12" md="9">
                                        <CInputFile id="file-input" name="file-input" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="password-input">Contraseña</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="password" id="password-input" name="password-input" placeholder="Contraseña" autoComplete="new-password" />
                                        <CFormText className="help-block">Debe contener al menos 8 carácteres</CFormText>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="repeat-input">Repetir Contraseña</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="password" id="repeat-input" name="repeat-input" placeholder="Confirma tu contraseña" />
                                        <CFormText className="help-block">Deben coincidir</CFormText>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup>
                                    <h3>
                                        Funciones
                                    </h3>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol tag="label" sm="3" className="col-form-label">
                                        Usuarios
                                    </CCol>
                                    <CCol sm="9">
                                        <CSwitch
                                            className="mr-1"
                                            color="dark"
                                            defaultChecked
                                            shape="pill"
                                            variant="opposite"
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol tag="label" sm="3" className="col-form-label">
                                        Consultas
                                    </CCol>
                                    <CCol sm="9">
                                        <CSwitch
                                            className="mr-1"
                                            color="dark"
                                            defaultChecked
                                            shape="pill"
                                            variant="opposite"
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol tag="label" sm="3" className="col-form-label">
                                        Operaciones
                                    </CCol>
                                    <CCol sm="9">
                                        <CSwitch
                                            className="mr-1"
                                            color="dark"
                                            defaultChecked
                                            shape="pill"
                                            variant="opposite"
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol tag="label" sm="3" className="col-form-label">
                                        Blog
                                    </CCol>
                                    <CCol sm="9">
                                        <CSwitch
                                            className="mr-1"
                                            color="dark"
                                            defaultChecked
                                            shape="pill"
                                            variant="opposite"
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol tag="label" sm="3" className="col-form-label">
                                        FAQ
                                    </CCol>
                                    <CCol sm="9">
                                        <CSwitch
                                            className="mr-1"
                                            color="dark"
                                            defaultChecked
                                            shape="pill"
                                            variant="opposite"
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol tag="label" sm="3" className="col-form-label">
                                        Equipo
                                    </CCol>
                                    <CCol sm="9">
                                        <CSwitch
                                            className="mr-1"
                                            color="dark"
                                            defaultChecked
                                            shape="pill"
                                            variant="opposite"
                                        />
                                    </CCol>
                                </CFormGroup>

                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default NewMember;
