// import { environment } from 'src/environments/environment';

const VERSION = 'V1';
const CONTEXT = 'flexpro/';

export function createFlexProBaseUrl(actionName: string): string {
    // return `${environment.apiUrl}${actionName}${VERSION}`;
    return `${'https://www.fakjhdkfs.com'}${CONTEXT}${actionName}`;
}

export function createRateAPIUrl(actionName: string): string {
    // return `${environment.rateApiUrl}${actionName}`;
      return `${'https://www.fakjhdkfs.com'}${actionName}`;
}

// export const APIURL = environment.apiUrl;
export const APIURL ='https://www.fakjhdkfs.com';
// export const IMAGE_BASE_URL = environment.imageBaseUrl;
export const IMAGE_BASE_URL = 'https://www.fakjhdkfs.com';

// shorthand to keep object concise
const FP = createFlexProBaseUrl;

export const URI = {
    // Auth
    LOGIN: `${APIURL}auth/login`,
    IDENTITY_TOKENS: `${APIURL}identity/tokens`,
    IDENTITY_TOKENS_KEEP_ALIVE: `${APIURL}identity/tokens/keep-alive`,
    IDENTITY_TOKENS_REFRESH: `${APIURL}identity/tokens/refresh`,
    USER: `${APIURL}identity/users`,
    ROLES: `${APIURL}identity/roles`,

    PERMISSIONS_BY_ROLE: `${APIURL}identity/roles/permissions/byrole`,
    PERMISSIONS_UPDATE: `${APIURL}identity/roles/permissions/update`,
    USER_ROLES: `${APIURL}identity/users/roles`,

    PRODUCT_GROUP: FP('productgroups'),
    BRAND: FP('brands'),
    PRODUCT_CATEGORIES: FP('productcategories'),
    PRODUCT: FP('product'),
    CHOICE_SET: FP('choiceset'),
    PRODUCT_ITEM: FP('productitem'),
    STOCK: FP('stock'),
    STOCK_ADJUST: FP('stock/adjust'),
    SALE: FP('sale'),
    SALE_ORDER: FP('salesorder'),
    RECEIPT: FP('receipt'),
    PURCHASE: FP('purchase'),
    PURCHASE_ORDER: FP('purchaseorder'),
    PAYMENT: FP('payment'),
    BUSINESS_PARTNER: FP('businessPartner'),
    REGISTER_SYSTEM_USER: FP('businessPartner/RegisterSystemUser'),

    CASH_REGISTER_SESSION: FP('CashRegisterSession'),
    CASH_MOVEMENT: FP('CashMovement'),

    EXPENSE: FP('expense'),
    EXPENSE_CATEGORY: FP('expensecategory'),
    EXPENSE_RECURRING: FP('expenserecurring'),
    SYSTEM_NOTICE: FP('SystemNotice'),
    SYSTEM_NOTICE_BY_BRANCH: FP('SystemNotice/GetSystemNoticeByBranch'),
    SYSTEM_NOTICE_ACTION: FP('SystemNotice/RegisterAction'),
    BANNER : FP('Banner'),
    BANNER_BY_BRANCH: FP('Banner/GetBannerByBranch'),
    BANNER_ACTION: FP('Banner/RegisterAction'),

    // Configurations
    COMPANY_MAIN: FP('CompanyMain'),
    COMPANY_TAX_CONFIG: FP('CompanyTaxConfig'),
    PURITY_RATE_CONFIG: FP('PurityRateConfig'),
    TERMINAL_CONFIG: FP('TerminalConfig'),
    DEVICE: FP('Device'),
    ROUTING_RULE: FP('RoutingRule'),

    GOLD_PRICE_URL: 'get_gold_prices_by_type',

    REPORTS: {
        PROFIT_LOSS: FP('Report/ProfitLoss'),
        CASH_FLOW_SUMMARY: FP('Report/CashFlowSummary'),
        CASH_FLOW_BY_PAYMENT_METHOD: FP('Report/CashFlowByPaymentMethod'),
        SALE_SUMMARY: FP('Report/SaleSummary'),
        PURCHASE_SUMMARY: FP('Report/PurchaseSummary'),
        STOCK_MOVEMENT_ANALYSIS: FP('Report/StockMovementAnalysis'),
        STOCK_VALUE_REPORT: FP('Report/StockValue'),
        STOCK_VALUE_SUMMARY: FP('Report/StockValueSummary'),
        SALE_PROFIT_LOSS_REPORT: FP('Report/SaleAndProfitLoss'),
        SALE_PROFIT_SUMMARY: FP('Report/SaleAndProfitSummary'),
        SALE_TIME_SERIES_REPORT: FP('Report/SaleAndProfitTimeSeries'),
        PROFIT_AND_LOSS_SUMMARY: FP('Report/ProfitAndLossSummary'),
        PROFIT_AND_LOSS_TIME_SERIES: FP('Report/ProfitAndLossTimeSeries'),
        EXPENSE_CATEGORY_BREAKDOWN: FP('Report/ExpenseCategoryBreakdown'),
        EXPENSE_VENDOR_BREAKDOWN: FP('Report/ExpenseVendorBreakdown'),
        EXPENSE_CATEGORY_TRENDS: FP('Report/ExpenseCategoryTrends'),
        EXPENSE_SUMMARY: FP('Report/ExpenseSummary')
    }
};

export const LANGUAGES = {
    EN: 'en',
    AR: 'ar',
    UR: 'ur'
}
export const DATE_FORMAT = 'd MMM, y';
export const INPUT_DATE_FORMAT = 'yyyy-MM-dd';
export const DATE_TIME_FORMAT = 'd MMM, y h:mm a';
export const CURRENCY_DECIMAL_PLACES = '1.2-2'; // 1 = Number of digits before decimal; 3-3 = minimum and maximum decimals to display

export enum APP_CONST {
    CURRENT_USER = '_currentUser',
    LAST_LOGIN = '_lastLogin',
    ALL_MODULES = '_all_modules',
    SIDEBAR = '_sidebar',
    ACCESS_TOKEN = '_token',
    REFRESH_TOKEN = '_refresh_token',
    RESENT_OTP = '_resend_otp',
    APP_NAME = 'FlexERP',
}

export enum STORAGE_KEY {
    COMPANY_DETAIL_KEY = '_companyDetailKey',
    COMPANY_TAX_CONFIGS_KEY = '_companyTaxConfigsKey',
    RELOAD_FLAG_KEY = 'reloadFlagKey',

    PURITY_RATE_CONFIG_PARAMS = 'purityRateConfigParams',

    PRODUCTS_STORAGE_KEY = 'productsStorageKey',
    PRODUCT_GROUPS_STORAGE_KEY = 'productGroupsStorageKey',
    PRODUCT_CATEGORIES_STORAGE_KEY = 'productCategoriesStorageKey',
    OPENED_CASH_REGISTER_ID_KEY = 'openedCashRegisterIdKey',
    CURRENT_TERMINAL_CONFIG_KEY = 'currentTerminalConfigKey',
    KITCHEN_TERMINAL_CONFIG_KEY = 'kitchenTerminalConfigKey',
    DEVICES_LIST_KEY = 'devicesListKey',
    MY_TERMINAL_INFO = 'myTerminalInfo',
}

export const CURRENCY = 'PKR';

export const STATUS = {
    DRAFT: 'DRAFT',
    AWAITING_AUTHORIZATION: 'AWAITING_AUTHORIZATION',
    AUTHORIZED: 'AUTHORISED',
    APPROVED: 'APPROVED',
    APPROVAL: 'APPROVAL',
    REJECTED: 'REJECTED',
    PENDING: 'PENDING',
    INPROGRESS: 'In Progress',
    ACTIVE: 'ACTIVE',
    ACTIVATION: 'ACTIVATION',
    ACTIVATION_COMPLETED: 'ACTIVATION_COMPLETED',
    ACTIVATION_PENDING: 'ACTIVATION_PENDING',
    DEACTIVATION: 'DEACTIVATION',
    DEACTIVATION_PENDING: 'DEACTIVATION_PENDING',
    INACTIVE: 'INACTIVE',
    DELETED: 'DELETED',
    INCOMPLETE: 'INCOMPLETE',
    EDITED: 'Edited',
    EXPIRED: 'Expired',
    UNDER_REVIEW: 'Under Review',
    DELETE_REQUEST: 'DELETE_REQUEST',
    DELETE_TRANSFER_REQUEST: 'DELETE_TRANSFER_REQUEST'
};

export const ACTION_LIST = {
    APPROVE: 'Approve',
    REJECT: 'Reject',
    CONFIRM: 'Confirm',
    DELETE: 'Delete',
    CREATE: 'Create',
    SEND_FOR_APPROVAL: 'Send for Approval',
    DEACTIVATE: 'Deactivate',
    ACTIVATE: 'Activate'
};

export const ROLE_TYPE = {
    MAKER: 'MAKER',
    AUTHORISER: 'AUTHORISER'
};

export const CONFIG = {
    PAGE_SIZE: 5,
    PAGE_SIZE_OPTIONS: [5, 15, 25]
};

export const REGEX = {
    PASSWORD: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    PASWORD_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/,
    UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
};

export const DEFAULT_ACCESS_POLICY_NAME = 'External Policy';
export const MODULES = {
    USER_MANAGEMENT: 'User Management',
    AUDIT_TRIAL_REPORT: 'Audit Trail Report',
    ROLE_MANAGEMENT: 'Role Managements',
    ALERT_MANAGEMENT: 'Alert Management',
    WORKING_WEEK: 'Working Week',
    LEAVES: 'Leaves',
    HOLIDAYS: 'Holidays',
    SYSTEM_MANAGEMENT: 'System Management',
    CUSTOMERS: 'Customers',
    SYSTEM_ACCESS_POLICY: 'System Access Policy',
    AUTHORITY_MATRIX: 'Authority Matrix',
    USER_GROUP: 'User Group',
    USER_ACCESS_PROFILE: 'User Access Management',
    LIMIT_ALLOCATION: 'Limit Allocation',
    DEPARTMENT_MANAGEMENT: 'Department',
    ROLE: 'Role',
    CORPORATE_SERVICE_LIMIT: 'Corporate Service Limit',
    USER_SERVICE_LIMIT: 'User Service Limit'
};

export const DEFAULT_IMAGE = 'assets/images/not-available.png';

export const DATES = {
    DATE_FMT: 'd MMM, y',
    //DATE_TIME_FMT_DEFAULT: `d MMM y hh:mm a`,
    DATE_TIME_FMT_DEFAULT: `d MMM yy hh:mm a`,
    DATE_TIME_FMT_PRINT: `D MMM YYYY HH:mm`,
    DATE_TIME_FMT: `medium`
};

export const InputDateFormat = {
    parse: {
        dateInput: 'input'
    },
    display: {
        dateInput: 'DD MMM, YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'MM/DD/YYYY',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};

export const SPECIAL_CHARACTERS_REGEX = /[^A-Za-z0-9 ]/i;

export const SECTION_LOADER_KEY = {
    //Sync
    SALE_SYNC: 'sale-sync',
    PRODUCT_SYNC: 'product-sync',
    PRODUCT_BRAND_SYNC: 'product-brand-sync',
    PRODUCT_GROUP_SYNC: 'product-group-sync',
    PRODUCT_CATEGORY_SYNC: 'product-category-sync',
    ROUTING_RULE_LISTING: 'Routing Rules',
    CHOICE_SET_SYNC: 'choice-set-sync',

    RECEIPT_SYNC: 'receipt-sync',
    PAYMENT_SYNC: 'payment-sync',

    // Search Listing
    CUSTOMER_SEARCH_LISTING: 'customer-search-listing',
    SUPPLIER_SEARCH_LISTING: 'supplier-search-listing',
    EXPENSE_CATEGORY_SEARCH_LISTING: 'expense-category-search-listing',
    PRODUCT_BRAND_SEARCH_LISTING: 'product-brand-search-listing',
    PRODUCT_GROUP_SEARCH_LISTING: 'product-group-search-listing',
    PRODUCT_CATEGORY_SEARCH_LISTING: 'product-category-search-listing',
    CHOICE_SET_SEARCH_LISTING: 'choice-set-search-listing',
    PURCHASE_ORDER_SEARCH_LISTING: 'purchase-order-search-listing',

    //Table Listing
    CUSTOMER_LISTING: 'customer-table-listing',
    BUSINESS_PARTNER_LISTING: 'business-partner-listing',
    SUPPLIER_LISTING: 'supplier-table-listing',
    PRODUCT_LISTING: 'product-table-listing',
    PRODUCT_ITEM_LISTING: 'product-item-table-listing',
    PRODUCT_BRANDS_LISTING: 'brands-table-listing',
    PRODUCT_GROUP_LISTING: 'product-group-table-listing',
    PRODUCT_CATEGORY_LISTING: 'product-category-table-listing',
    CHOICE_SET_LISTING: 'choice-set-table-listing',
    CASH_MANAGEMENT_LISTING: 'cash-management-listing',

    SALE_HISTORY_LISTING: 'sale-history-table-listing',
    SALE_RETURN_HISTORY_LISTING: 'sale-return-history-table-listing',
    PURCHASE_HISTORY_LISTING: 'purchase-history-table-listing',
    PURCHASE_RETURN_HISTORY_LISTING: 'purchase-return-history-table-listing',
    PURCHASE_ORDER_LISTING: 'purchase-order-table-listing',
    OUTSTANDING_SALE_LISTING: 'outstanding-sale-table-listing',
    RECEIPTS_LISTING: 'receipts-table-listing',
    PAYMENTS_LISTING: 'payments-table-listing',
    OUTSTANDING_PURCHASE_LISTING: 'outstanding-purchase-table-listing',
    REGISTER_CLOSURE_LISTING: 'register-closure-table-listing',
    STOCK_VALUE_SUMMARY: 'stock-value-table-listing',
    STOCK_MOVEMENT_SUMMARY: 'stock-movement-table-listing',
    SALE_TIME_SERIES_SUMMARY: 'sale-time-series-table-listing',

    CASH_REGISTER_SALE_LISTING: 'cash-register-sale-table-listing',
    CASH_REGISTER_PURCHASE_LISTING: 'cash-register-purchase-table-listing',
    CASH_REGISTER_RECEIPT_LISTING: 'cash-register-receipt-table-listing',
    CASH_REGISTER_PAYMENT_LISTING: 'cash-register-payment-table-listing',

    EXPENSE_LISTING: 'expense-table-listing',
    EXPENSE_CATEGORY_LISTING: 'expense-category-table-listing',
    EXPENSE_RECURRING_LISTING: 'expense-recurring-table-listing',

    COMPANY_LISTING: 'company-table-listing',
    PURITY_RATE_CONFIG_LISTING: 'purity-rate-config-table-listing',
    COMPANY_TAX_LISTING: 'company-tax-config-table-listing',
    ROLE_LISTING: 'role-table-listing',
    USER_LISTING: 'user-table-listing',

    STOCK_ADJUSTMENT_LISTING: 'stock-adjustment-listing',

    TERMINAL_LISTING: 'terminal-listing',
    DEVICE_LISTING: 'device-listing',

    SALE_ANALYSIS: 'sale-analysis',

    // Dashboard and Reporting
    PURCHASE_SUMMARY: 'purchase-summary',
    SALE_SUMMARY: 'sale-summary',
    PROFIT_SUMMARY: 'profit-summary',
    PROFIT_LOSS_SUMMARY: 'Profit-and-loss-summary',
    PROFIT_LOSS_TIME_SERIES: 'Profit-and-loss-time-series',
    CASH_FLOW_BY_PAYMENT_METHOD: 'Cash-flow-by-payment-method',
    CASH_FLOW_SUMMARY: 'Cash-flow-summary',

    CASH_REGISTER_SESSION: 'cash-register-session',
    OPEN_CASH_REGISTER_SESSION: 'open-cash-register-session',
    CASH_REGISTER_SESSION_DETAIL: 'cash-register-session-detail',

    CURRENT_SALE: 'current-sale',
    CURRENT_SALE_HISTORY: 'current-sale-history',
    SALE_PRODUCTS: 'sale-products',
    PRODUCT_CATEGORIES: 'product-categories',
    SALE_VIEW: 'sale-view',
    CURRENT_PURCHASE: 'current-purchase',
    PURCHASE_PRODUCTS: 'purchase-products',
    PURCHASE_VIEW: 'purchase-view',

    SALE_SETTLEMENT: 'sale-settlement',
    PURCHASE_SETTLEMENT: 'purchase-settlement',

    CHOICE_SET_DETAIL: 'choice-set-detail',
    PRODUCT_DETAIL: 'product-detail',
    EXPENSE_DETAIL: 'expense-detail',
    EXPENSE_CATEGORY_DETAIL: 'expense-category-detail',
    EXPENSE_RECURRING_DETAIL: 'expense-recurring-table-detail',
    PRODUCT_ITEM_DETAIL: 'product-item-detail',
    PRODUCT_GROUP_DETAIL: 'product-group-detail',
    PRODUCT_CATEGORY_DETAIL: 'product-category-detail',
    PRODUCT_BRAND_DETAIL: 'product-brand-detail',
    COMPANY_DETAIL: 'company-detail',
    PURITY_RATE_CONFIG_DETAIL: 'purity-rate-config-detail',
    COMPANY_TAX_DETAIL: 'company-tax-detail',
    PURCHASE_ORDER_DETAIL: 'purchase-order-detail',
    PURCHASE_DETAIL: 'purchase-detail',
    PURCHASE_RETURN_DETAIL: 'purchase-return-detail',
    CUSTOMER_DETAIL: 'customer-detail',
    SUPPLIER_DETAIL: 'supplier-detail',
    STOCK_ADJUSTMENT_DETAIL: 'stock-adjustment-detail',
    ROUTING_RULE_DETAIL: 'routing-rule-detail',
    ROLE_DETAIL: 'role-detail',
    USER_DETAIL: 'user-detail',
    ROLES_PERMISSION_DETAIL: 'roles-permission-detail',
    USER_ROLE_DETAIL: 'user-role-detail',

    // Others
    TERMINAL_CONFIG: 'terminal-config',
    DEVICE_CONFIG: 'device-config',

}
