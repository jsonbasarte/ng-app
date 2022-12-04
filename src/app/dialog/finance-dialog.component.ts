import { Component, ElementRef, ViewChild } from '@angular/core'
export interface IFinance {
  name: string
  value: number | string
  financeValue: number
  column: string
  isEdit: boolean
}

const FINACEN_DATA: IFinance[] = [
  {
    name: 'NVB',
    value: Number(0).toPrecision(2),
    financeValue: 0,
    column: 'nvb',
    isEdit: false,
  },
  {
    name: 'ROU',
    value: Number(0).toPrecision(2),
    financeValue: 0,
    column: 'rou',
    isEdit: false,
  },
  {
    name: 'Net Present Value',
    value: Number(0).toPrecision(2),
    financeValue: 0,
    column: 'netPresentValue',
    isEdit: false,
  },
  {
    name: 'P&L Impact',
    value: Number(0).toPrecision(2),
    financeValue: 0,
    column: 'plImpact',
    isEdit: false,
  },
  {
    name: 'Remaining Obligation',
    value: Number(0).toPrecision(2),
    financeValue: 0,
    column: 'remainingObligation',
    isEdit: false,
  },
  {
    name: 'Annual Sublease Income',
    value: Number(0).toPrecision(2),
    financeValue: 0,
    column: 'annualSubleaseIncome',
    isEdit: false,
  },
  {
    name: 'Total Sublease Income Recovery',
    value: Number(10).toPrecision(3),
    financeValue: 0,
    column: 'totalSubleaseIncomeRecovery',
    isEdit: false,
  },
  {
    name: 'Broker Fee',
    value: Number(0).toPrecision(2),
    financeValue: 0,
    column: 'brokerFee',
    isEdit: false,
  },
]

interface IStringNumMap {
  [key: string]: number
}
@Component({
  selector: 'finance-dialog',
  templateUrl: 'finance-dialog.component.html',
  styleUrls: ['finance-dialog.css'],
})
export class FinanceDialog {
  @ViewChild('inputField') inputElement!: ElementRef<HTMLInputElement>

  displayedColumns: string[] = ['name', 'asEnteredOnDeal', 'financeValue']
  dataSource = FINACEN_DATA
  hideItemField(item: IFinance) {
    item.isEdit = false
  }
  editItemField(item: IFinance) {
    item.isEdit = true
    setTimeout(() => {
      this.inputElement.nativeElement.focus()
    }, 0)
  }
  saveFinance() {
    const newData: IStringNumMap = {
      nvb: 0,
      rou: 0,
      netPresentValue: 0,
      plImpact: 0,
      remainingObligation: 0,
      annualSubleaseIncome: 0,
      totalSubleaseIncomeRecovery: 0,
      brokerFee: 0,
    }
    for (let prop of this.dataSource) {
      newData[prop.column] = Number(prop.financeValue)
    }
    console.log('Updated values: ', newData)
  }
}
