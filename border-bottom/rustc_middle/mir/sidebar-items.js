window.SIDEBAR_ITEMS = {"constant":[["OUTERMOST_SOURCE_SCOPE",""],["RETURN_PLACE",""],["START_BLOCK",""],["TAG_CLEAR_CROSS_CRATE_CLEAR",""],["TAG_CLEAR_CROSS_CRATE_SET",""]],"enum":[["AggregateKind",""],["AnalysisPhase","See [`MirPhase::Analysis`]."],["AssertKind","Information about an assertion failure."],["BinOp",""],["BindingForm",""],["BorrowKind",""],["CastKind",""],["ClearCrossCrate",""],["ClosureOutlivesSubject","The subject of a `ClosureOutlivesRequirement` – that is, the thing that must outlive some region."],["ConstantKind",""],["ConstraintCategory","Outlives-constraints can be categorized to determine whether and why they are interesting (for error reporting). Order of variants indicates sort order of the category, thereby influencing diagnostic output."],["FakeReadCause","The `FakeReadCause` describes the type of pattern why a FakeRead statement exists."],["InlineAsmOperand",""],["LocalInfo","Extra information about a some locals that’s used for diagnostics and for classifying variables into local variables, statics, etc, which is needed e.g. for unsafety checking."],["LocalKind","Classifies locals into categories. See `Body::local_kind`."],["MirPhase","Represents the “flavors” of MIR."],["Mutability",""],["NonDivergingIntrinsic",""],["NullOp",""],["Operand","An operand in MIR represents a “value” in Rust, the definition of which is undecided and part of the memory model. One proposal for a definition of values can be found on UCG."],["ProjectionElem",""],["RetagKind","Describes what kind of retag is to be performed."],["ReturnConstraint",""],["RuntimePhase","See [`MirPhase::Runtime`]."],["Rvalue","The various kinds of rvalues that can appear in MIR."],["Safety",""],["StatementKind","The various kinds of statements that can appear in MIR."],["TerminatorKind","The various kinds of terminators, representing ways of exiting from a basic block."],["UnOp",""],["UnsafetyViolationDetails",""],["UnsafetyViolationKind",""],["UnusedUnsafe",""],["VarDebugInfoContents",""]],"fn":[["comma_sep",""],["graphviz_safe_def_name",""],["pretty_print_byte_str",""],["pretty_print_const",""],["pretty_print_const_value",""]],"mod":[["basic_blocks",""],["binding_form_impl",""],["coverage","Metadata from source code coverage analysis and instrumentation."],["generic_graph",""],["generic_graphviz",""],["graph_cyclic_cache",""],["graphviz",""],["interpret","An interpreter for MIR used in CTFE and by miri."],["mono",""],["patch",""],["predecessors","Lazily compute the reverse control-flow graph for the MIR."],["pretty",""],["query","Values computed by queries that use MIR."],["size_asserts",""],["spanview",""],["switch_sources","Lazily compute the inverse of each `SwitchInt`’s switch targets. Modeled after `Predecessors`/`PredecessorCache`."],["syntax","This defines the syntax of MIR, i.e., the set of available MIR operations, and other definitions closely related to MIR semantics. This is in a dedicated file so that changes to this file can be reviewed more carefully. The intention is that this file only contains datatype declarations, no code."],["tcx","Methods for the various MIR types. These are intended for use after building is complete."],["terminator",""],["traversal",""],["type_foldable","`TypeFoldable` implementations for MIR types"],["type_visitable","`TypeVisitable` implementations for MIR types"],["visit","The MIR Visitor"]],"struct":[["BasicBlock","A node in the MIR control-flow graph."],["BasicBlockData","Data for a basic block, including a list of its statements."],["BasicBlocks",""],["BlockTailInfo","`BlockTailInfo` is attached to the `LocalDecl` for temporaries created during evaluation of expressions in a block tail expression; that is, a block like `{ STMT_1; STMT_2; EXPR }`."],["Body","The lowered representation of a single function."],["BorrowCheckResult",""],["ClosureOutlivesRequirement","Indicates an outlives-constraint between a type or between two free regions declared on the closure."],["ClosureRegionRequirements","After we borrow check a closure, we are left with various requirements that we have inferred between the free regions that appear in the closure’s signature or on its field types. These requirements are then verified and proved by the closure’s creating function. This struct encodes those requirements."],["ConstQualifs","The result of the `mir_const_qualif` query."],["Constant","Constants"],["CopyNonOverlapping",""],["Coverage",""],["CoverageInfo","Coverage information summarized from a MIR if instrumented for source code coverage (see compiler option `-Cinstrument-coverage`). This information is generated by the `InstrumentCoverage` MIR pass and can be retrieved via the `coverageinfo` query."],["DestructuredConst","The constituent parts of a type level constant of kind ADT or array."],["DestructuredMirConstant","The constituent parts of a mir constant of kind ADT or array."],["Field","A newtype’d index type in the MIR control-flow graph"],["GeneratorInfo",""],["GeneratorLayout","The layout of generator state."],["GeneratorSavedLocal",""],["Local",""],["LocalDecl","A MIR local."],["Location","`Location` represents the position of the start of the statement; or, if `statement_index` equals the number of statements, then the start of the terminator."],["MirSource","Where a specific `mir::Body` comes from."],["Place","Places roughly correspond to a “location in memory.” Places in MIR are the same mathematical object as places in Rust. This of course means that what exactly they are is undecided and part of the Rust memory model. However, they will likely contain at least the following pieces of information in some form:"],["PlaceRef",""],["Promoted",""],["SourceInfo","Grouped information about the source code origin of a MIR entity. Intended to be inspected by diagnostics and debuginfo. Most passes can work with it as a whole, within a single function."],["SourceScope",""],["SourceScopeData",""],["SourceScopeLocalData",""],["Statement","A statement in a basic block, including information about its source code."],["UnsafetyCheckResult",""],["UnsafetyViolation",""],["UserTypeProjection","Encodes the effect of a user-supplied type annotation on the subcomponents of a pattern. The effect is determined by applying the given list of projections to some underlying base type. Often, the projection element list `projs` is empty, in which case this directly encodes a type in `base`. But in the case of complex patterns with subpatterns and bindings, we want to apply only a part of the type to a variable, in which case the `projs` vector is used."],["UserTypeProjections","A collection of projections into user types."],["VarBindingForm",""],["VarDebugInfo","Debug information pertaining to a user variable."]],"trait":[["HasLocalDecls",""],["MirPass","A streamlined trait that you can implement to create a pass; the pass will be named after the type, and it will consist of a main loop that goes over each available MIR and applies `run_pass`."]],"type":[["AssertMessage","Type for MIR `Assert` terminator error messages."],["LocalDecls","Types for locals"],["PlaceElem","Alias for projections as they appear in places, where the base is a place and the index is a local."],["ProjectionKind","Alias for projections as they appear in `UserTypeProjection`, where we need neither the `V` parameter for `Index` nor the `T` for `Field`."]]};