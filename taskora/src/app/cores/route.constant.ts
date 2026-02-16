export const APP_ROUTE = {
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
  SESSION_EXPIRED: '/auth/session-expired',
  SETTINGS: {
    HOME: '/setting',
    CHANGE_PASSWORD: '/setting/password-change',
    CHANGE_PASSWORD_EXPIRY: '/setting/password-expiry',
    CHANGE_SITE_KEY: '/setting/site-key',
    FULL_ACCESS: '/setting/full-access',
    SMS: '/setting/sms-send',
    VERIFY_OTP: '/setting/verify-otp',
  },
  ACCOUNT_TYPES: {
    HOME: '/admin/account-types/home',
    SUMMARY: '/admin/account-types/summary',
    VIEW: '/admin/account-types/view',
  },
  MANAGE_GLOBAL_SYSTEM: {
    HOME: './global-system/home',
    SUMMARY: './global-system/summary',
    VIEW: './global-system/view',
  },
  ADMIN: {
    HOME: '/admin',
    INVENTORY: {
      PRODUCT_ITEM: 'inventory/productItems',
      AVAILABLE_STOCK: 'inventory/availableStock',
      TALLY_STOCK: 'inventory/tallyStock',
      STOCK_ADJUSTMENT: 'inventory/stockAdjustment',
    },
    TRANSACTIONS: {
      HOME: '/admin/transactions',

      CASH_REGISTER: {
        OPEN_CLOSE: '/admin/transactions/cash-register/open-close',
        CASH_MANAGEMENT: '/admin/transactions/cash-register/cash-management'
      },

      SALE: {
        HOME: '/admin/transactions/sale/home',
        SUMMARY: '/admin/transactions/sale/summary',
        VIEW: '/admin/transactions/sale/view',
        HISTORY: '/admin/transactions/sale/history',
        SETTLEMENT: '/admin/transactions/sale/settlement',
        RECEIPTS_ALLOCATION_DETAIL: '/admin/transactions/sale/receipts-allocation-detail'
      },
      SALE_ORDER: {
        HOME: '/admin/transactions/sale-order/home',
        SUMMARY: '/admin/transactions/sale-order/summary',
        RECEIPT: '/admin/transactions/sale-order/receipt',
        HISTORY: '/admin/transactions/sale-order/history',
      },
      SALE_RETURN: {
        HOME: '/admin/transactions/sale-return/home',
        SUMMARY: '/admin/transactions/sale-return/summary',
        RECEIPT: '/admin/transactions/sale-return/receipt',
        HISTORY: '/admin/transactions/sale-return/history',
      },
      PURCHASE: {
        HOME: '/admin/transactions/purchase/home',
        SUMMARY: '/admin/transactions/purchase/summary',
        VIEW: '/admin/transactions/purchase/view',
        RECEIPT: '/admin/transactions/purchase/receipt',
        HISTORY: '/admin/transactions/purchase/history',
        SETTLEMENT: '/admin/transactions/purchase/settlement',
        BARCODE_PRINTING: '/admin/transactions/purchase/barcode-printing',
        PAYMENT_DISBURSEMENT_DETAIL: '/admin/transactions/purchase/payment-disbursement-detail'
      },
      PURCHASE_ORDER: {
        HOME: '/admin/transactions/purchase-order/home',
        SUMMARY: '/admin/transactions/purchase-order/summary',
        RECEIPT: '/admin/transactions/purchase-order/receipt',
        HISTORY: '/admin/transactions/purchase-order/history',
        RECEIVE: '/admin/transactions/purchase-order/receive',
      },
      PURCHASE_RETURN: {
        HOME: '/admin/transactions/purchase-return/home',
        RECEIPT: '/admin/transactions/purchase-return/receipt',
        HISTORY: '/admin/transactions/purchase-return/history',
      },
    },
    RECEIVABLES: {
      OUTSTANDING_SALES: '/admin/receivables/outstanding-sales',
      RECEIVE_PAYMENT: '/admin/receivables/receive-payment',
      RECEIPTS: '/admin/receivables/receipts',
    },
    PAYABLES: {
      OUTSTANDING_PURCHASES: '/admin/payables/outstanding-purchases',
      MAKE_PAYMENT: '/admin/payables/make-payment',
      PAYMENTS: '/admin/payables/payments'
    },
    CATALOG: {
      HOME: '/admin/catalog',
      PRODUCTS: '/admin/catalog/products',
      PRODUCT_DETAIL: '/admin/catalog/products/product-detail',
      PRODUCT_GROUPS: '/admin/catalog/product-groups',
      PRODUCT_BRANDS: '/admin/catalog/product-brands',
      PRODUCT_CATEGORIES: '/admin/catalog/product-categories',
      CHOICE_SETS: '/admin/catalog/choice-sets',
    },
    EMPLOYEES: {
      EMPLOYEES: '/admin/employees/employees',
      DAILY_ATTENDANCE: '/admin/employees/daily-attendance',
      ATTENDANCE_REPORT: '/admin/employees/attendance-report',
    },
    CONFIGURATIONS: {
      COMPANIES: '/admin/configurations/companies',
      PURITY: '/admin/configurations/purity',
      TAX: '/admin/configurations/tax',
      TABLES: '/admin/configurations/tables',
      UNIT_CONVERSION: '/admin/configurations/unit-conversion',
      TERMINAL_CONFIG: 'terminal-config',
    },
    REPORTS: {
      PROFIT_LOSS: '/admin/reports/profit-loss',
      CASH_FLOW: '/admin/reports/cash-flow',
      SALE_REPORT: '/admin/reports/sale-report',
      PURCHASE_REPORT: '/admin/reports/purchase-report',
      STOCK_ANALYSIS_REPORT: '/admin/reports/stock-analysis',
      STOCK_VALUE_REPORT: '/admin/reports/stock-value-report',
      EXPENSE_REPORT: '/admin/reports/expense-report',

      REGISTER_CLOSURES: '/admin/reports/register-closures',
      REGISTER_CLOSURE_DETAIL: '/admin/reports/register-closures/register-closure-detail',
      REGISTER_CLOSURE_SALE_DETAIL: '/admin/reports/register-closures/register-closure-sale-detail',
    },
    EXPENSES: {
      HOME: '/admin/expenses',
      EXPENSE_DETAIL: '/admin/expenses/expense-detail',
      EXPENSE_VIEW: '/admin/expenses/expense-view',
      EXPENSE_CATEGORY: '/admin/expenses/expense-category',
      EXPENSE_RECURRING: '/admin/expenses/recurring',
    },
    SYNC_MANAGER: {
      HOME: '/admin/sync-manager',
    }
  },
};
