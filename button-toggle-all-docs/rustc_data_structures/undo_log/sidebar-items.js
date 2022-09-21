window.SIDEBAR_ITEMS = {"struct":[["NoUndo",""],["Snapshot","Snapshots are tokens that should be created/consumed linearly."],["VecLog","A basic undo log."]],"trait":[["Rollback","A trait implemented for storage types (like `SnapshotVecStorage`) which can be rolled back using actions of type `U`."],["Snapshots","A trait which extends `UndoLogs` to allow snapshots to be done at specific points. Each snapshot can then be used to rollback any changes to an underlying data structures if they were not desirable."],["UndoLogs","A trait which allows undo actions (`T`) to be pushed which can be used to rollback actio at a later time if needed."]]};