import { TransactionStatus } from "./transaction-status.enum";

export interface StatusMeta {
    label: string;
    color: string;
}

export const TransactionStatusColor: Record<string, { color: string, label?: string }> = {
    [TransactionStatus.New]: { color: '#ffc107', label: 'New' },
    [TransactionStatus.Draft]: { color: '#9e9e9e', label: 'Draft' },
    [TransactionStatus.Hold]: { color: '#ff9800', label: 'Hold' },
    // [ReceiptAllocationStatus.Unallocated]: { color: '#ced2f7ff', label: 'Unallocated' },
    // [ReceiptAllocationStatus.Allocated]: { color: '#ced2f7ff', label: 'Allocated' },
    // [ReceiptAllocationStatus.PartiallyAllocated]: { color: '#ced2f7ff', label: 'Partially Allocated' },
    // [PaymentDisbursementStatus.Unpaid]: { color: '#9ff3fcff', label: 'Unpaid' },
    // [PaymentDisbursementStatus.Disbursed]: { color: '#9ff3fcff', label: 'Disbursed' },
    // [PaymentDisbursementStatus.PartiallyDisbursed]: { color: '#9ff3fcff', label: 'Partially Disbursed' },
    // [PaymentDisbursementStatus.Returned]: { color: '#9ff3fcff', label: 'Returned' },
    // [TransactionStatus.PaymentPending]: { color: '#ffc107', label: 'Payment Pending' },
    [TransactionStatus.Complete]: { color: '#4caf50', label: 'Complete' },
    [TransactionStatus.Reversed]: { color: '#f44336', label: 'Reversed' },
    [TransactionStatus.Paid]: { color: '#f0f05f', label: 'Paid' },
    [TransactionStatus.PartialReversed]: { color: '#e57373', label: 'Partial Reversed' },
    [TransactionStatus.Sent]: { color: '#2196f3', label: 'Sent' },
    [TransactionStatus.Received]: { color: '#66bb6a', label: 'Received' },
    [TransactionStatus.PartialReceived]: { color: '#81c784', label: 'Partial Received' },
    [TransactionStatus.Canceled]: { color: '#b71c1c', label: 'Canceled' },
};
