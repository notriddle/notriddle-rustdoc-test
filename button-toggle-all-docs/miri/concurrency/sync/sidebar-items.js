window.SIDEBAR_ITEMS = {"macro":[["declare_id","We cannot use the `newtype_index!` macro because we have to use 0 as a sentinel value meaning that the identifier is not assigned. This is because the pthreads static initializers initialize memory with zeros (see the `src/shims/sync.rs` file)."]],"struct":[["Condvar","The conditional variable state."],["CondvarId","0 is used to indicate that the id was not yet assigned and, therefore, is not a valid identifier."],["CondvarWaiter","A thread waiting on a conditional variable."],["Futex","The futex state."],["FutexWaiter","A thread waiting on a futex."],["Mutex","The mutex state."],["MutexId","0 is used to indicate that the id was not yet assigned and, therefore, is not a valid identifier."],["RwLock","The read-write lock state."],["RwLockId","0 is used to indicate that the id was not yet assigned and, therefore, is not a valid identifier."],["SynchronizationState","The state of all synchronization variables."]],"trait":[["EvalContextExt",""],["EvalContextExtPriv",""]]};