export enum TransactionStatus {
    New = 'New',
    Draft = 'Draft',
    Hold = 'Hold',
    PaymentPending = 'PaymentPending',
    Complete = 'Complete',
    Reversed = 'Reversed',
    Paid = 'Paid',
    PartialReversed = 'PartialReversed',
    Sent = 'Sent',
    Received = 'Received',
    PartialReceived = 'PartialReceived',
    Canceled = 'Canceled'
}

export enum ReceiptAllocationStatus {
    Unallocated = 'Unallocated',
    Allocated = 'Allocated',
    PartiallyAllocated = 'PartiallyAllocated'
}

export enum PaymentDisbursementStatus {
    Unpaid = 'Unpaid',
    Disbursed = 'Disbursed',
    PartiallyDisbursed = 'PartiallyDisbursed',
    Returned = 'Returned'
}
