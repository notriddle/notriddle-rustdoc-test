window.SIDEBAR_ITEMS = {"fn":[["check_crate",""],["check_for_entry_fn",""],["check_main_fn_ty",""],["check_start_fn_ty",""],["hir_trait_to_predicates",""],["hir_ty_to_ty","A quasi-deprecated helper used in rustdoc and clippy to get the type from a HIR node."],["provide",""],["require_c_abi_if_c_variadic",""],["require_same_types",""]],"macro":[["type_error_struct",""]],"mod":[["astconv","Conversion from AST representation of types to the `ty.rs` representation. The main routine here is `ast_ty_to_ty()`; each use is parameterized by an instance of `AstConv`."],["bounds","Bounds are restrictions applied to some types after they’ve been converted into the `ty` form from the HIR."],["check","typeck: check phase"],["check_unused",""],["coherence",""],["collect","“Collection” is the process of determining the type and other external details of each item in Rust. Collection is specifically concerned with inter-procedural things – for example, for a function definition, collection will figure out the type and signature of the function, but it will not visit the body of the function in any way, nor examine type annotations on local variables (that’s the job of type checking)."],["constrained_generic_params",""],["errors","Errors emitted by typeck."],["expr_use_visitor","A different sort of visitor for walking fn bodies. Unlike the normal visitor, which just walks the entire body in one shot, the `ExprUseVisitor` determines how expressions are being used."],["hir_wf_check",""],["impl_wf_check","This pass enforces various “well-formedness constraints” on impls. Logically, it is part of wfcheck – but we do it early so that we can stop compilation afterwards, since part of the trait matching infrastructure gets very grumpy if these conditions don’t hold. In particular, if there are type parameters that are not part of the impl, then coherence will report strange inference ambiguity errors; if impls have duplicate items, we get misleading specialization errors. These things can (and probably should) be fixed, but for the moment it’s easier to do these checks early."],["mem_categorization","Categorization"],["outlives",""],["structured_errors",""],["variance","Module for inferring the variance of type and lifetime parameters. See the rustc dev guide chapter for more info."]]};