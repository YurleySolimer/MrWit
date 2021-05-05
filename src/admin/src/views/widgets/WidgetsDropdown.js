import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
// import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="9.823"
          text="Registros semanales"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{ height: '70px' }}
              dataPoints={[635, 549, 854, 814, 541, 535, 450]}
              pointHoverBackgroundColor="primary"
              label="Registros"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-user" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Clientes</CDropdownItem>
              <CDropdownItem>Consultores</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="3.153"
          text="Usuarios online"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              dataPoints={[101, 148, 903, 1107, 304, 212, 611]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.000001 } } }}
              label="Usuarios"
              labels="days"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Semanal</CDropdownItem>
              <CDropdownItem>Diario</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="COP 90.823"
          text="Ingresos diarios"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3"
              style={{ height: '70px' }}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[70.148, 80.123, 80.131, 45.314, 34.413, 12.516, 40.918]}
              options={{ elements: { line: { tension: 0.000001 } } }}
              pointHoverBackgroundColor="warning"
              label="COP"
              labels="hours"
            />
          }>
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Semanal</CDropdownItem>
              <CDropdownItem>Mensual</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="COP 69.823"
          text="Egresos diarios"
          footerSlot={
            <ChartLineSimple
              className="mt-3 mx-3"
              pointed
              style={{ height: '70px' }}
              dataPoints={[70.148, 80.123, 80.131, 45.314, 34.413, 12.516, 40.918]}
              backgroundColor="rgba(255,255,255,.2)"
              pointHoverBackgroundColor='danger'
              label="COP"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Semanal</CDropdownItem>
              <CDropdownItem>Mensual</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
