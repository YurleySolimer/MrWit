import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Minutos de consulta</h4>
              <div className="small text-muted">Mayo</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                    <CButton
                      color="outline-secondary"
                      key='Mensual'
                      className="mx-0"
                      active={true}
                    >
                      Mensual
                    </CButton>
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h3>Profesiones, sectores y busquedas</h3>
              <p className="text-muted">Los siguientes datos son representados en un porcentaje sobre el total existente</p>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">

                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Agropecuarios
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="34" />
                      <CProgress className="progress-xs" color="danger" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Servicios
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="56" />
                      <CProgress className="progress-xs" color="danger" value="94" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Salud
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="12" />
                      <CProgress className="progress-xs" color="danger" value="67" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Transporte
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="43" />
                      <CProgress className="progress-xs" color="danger" value="91" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Comercio
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="22" />
                      <CProgress className="progress-xs" color="danger" value="73" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Minería
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="53" />
                      <CProgress className="progress-xs" color="danger" value="82" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Comunicaciones
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="9" />
                      <CProgress className="progress-xs" color="danger" value="69" />
                    </div>
                  </div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                      Busquedas
                      &nbsp;
                      <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                      Registros
                    </small>
                  </div>
                </CCol>

                <CCol xs="12" md="6" xl="6">
                  
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span className="title">Abogado</span>
                      <span className="ml-auto font-weight-bold">1,235 | 37,564</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="2" />
                      <CProgress className="progress-xs" color="danger" value="54" />
                    </div>
                  </div>


                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span className="title">Médico</span>
                      <span className="ml-auto font-weight-bold">223 | 1,223</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="1" />
                      <CProgress className="progress-xs" color="danger" value="2" />
                    </div>
                  </div>
                  
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span className="title">Contador</span>
                      <span className="ml-auto font-weight-bold">7,564 | 18,235</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="11" />
                      <CProgress className="progress-xs" color="danger" value="26" />
                    </div>
                  </div>
                  
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span className="title">Administrador de empresas</span>
                      <span className="ml-auto font-weight-bold">2.819 | 2,819</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="4" />
                      <CProgress className="progress-xs" color="danger" value="4" />
                    </div>
                  </div>
                 
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span className="title">Psicólogo</span>
                      <span className="ml-auto font-weight-bold">18,235 | 7,564</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="26" />
                      <CProgress className="progress-xs" color="danger" value="10" />
                    </div>
                  </div>


                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span className="title">Veterinario</span>
                      <span className="ml-auto font-weight-bold">1,223 | 223</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="2" />
                      <CProgress className="progress-xs" color="danger" value="1" />
                    </div>
                  </div>
                  
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <span className="title">Agrónomo</span>
                      <span className="ml-auto font-weight-bold">37,564 | 1,235</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="54" />
                      <CProgress className="progress-xs" color="danger" value="2" />
                    </div>
                  </div>  

                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><CBadge shape="pill" color="success">&nbsp;</CBadge></sup>
                      Busquedas
                      &nbsp;
                      <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                      Registros
                    </small>
                  </div>           
                </CCol>
              </CRow>

           

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
