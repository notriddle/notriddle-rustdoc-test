window.SIDEBAR_ITEMS = {"enum":[["DiagnosticImportance",""],["Status",""]],"mod":[["ty",""]],"struct":[["CellBorrow","A borrow of a type that contains an `UnsafeCell` somewhere. The borrow might escape to the final value of the constant, and thus we cannot allow this (for now). We may allow it in the future for static items."],["FloatingPointOp",""],["FnCallIndirect","A function call where the callee is a pointer."],["FnCallNonConst","A function call where the callee is not marked as `const`."],["FnCallUnstable","A call to an `#[unstable]` const fn or `#[rustc_const_unstable]` function."],["Generator",""],["HeapAllocation",""],["InlineAsm",""],["LiveDrop",""],["MutBorrow","This op is for `&mut` borrows in the trailing expression of a constant which uses the “enclosing scopes rule” to leak its locals into anonymous static or const items."],["MutDeref",""],["PanicNonStr","A call to a `panic()` lang item where the first argument is not a `&str`."],["RawMutPtrDeref",""],["RawPtrComparison","Comparing raw pointers for equality. Not currently intended to ever be allowed, even behind a feature gate: operation depends on allocation base addresses that are not known at compile-time."],["RawPtrToIntCast","Casting raw pointer or function pointer to an integer. Not currently intended to ever be allowed, even behind a feature gate: operation depends on allocation base addresses that are not known at compile-time."],["StaticAccess","An access to a (non-thread-local) `static`."],["ThreadLocalAccess","An access to a thread-local `static`."],["TransientCellBorrow","A borrow of a type that contains an `UnsafeCell` somewhere. The borrow never escapes to the final value of the constant."],["TransientMutBorrow",""]],"trait":[["NonConstOp","An operation that is not always allowed in a const context."]]};