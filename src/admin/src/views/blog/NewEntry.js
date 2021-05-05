import React, { useState } from 'react';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CButton,
    CForm,
    CFormGroup,
    CLabel,
    CInput,
    CInputFile,
    CCardFooter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NewEntry = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (e) => {
        setEditorState(e);
    }

    return (
        <>
            <CCard>
                <CCardHeader>
                    <h2>Nueva entrada</h2>
                </CCardHeader>
                <CCardBody>
                    <CRow>
                        <CCol xs='12' md='8'>
                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={onEditorStateChange}
                            />
                        </CCol>
                        <CCol xs='12' md='4'>
                            <CCard>
                                <CCardHeader>
                                    Información extra
                                </CCardHeader>
                                <CCardBody>
                                    <CForm>
                                        <CFormGroup>
                                            <CLabel htmlFor="title">Título</CLabel>
                                            <CInput id="title" placeholder="Título del post" />
                                        </CFormGroup>
                                        <CFormGroup>
                                            <CLabel htmlFor="tags">Etiquetas</CLabel>
                                            <CInput id="tags" placeholder="Separadas por comas" />
                                        </CFormGroup>
                                        <CFormGroup className='custom-input'>
                                            <CInputFile custom id="custom-file-input" />
                                            <CLabel htmlFor="custom-file-input" variant="custom-file">
                                                Escoge una imagen...
                                            </CLabel>
                                        </CFormGroup>
                                    </CForm>
                                </CCardBody>
                                <CCardFooter>
                                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Guardar</CButton>
                                </CCardFooter>
                            </CCard>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </>
    )
}

export default NewEntry;
