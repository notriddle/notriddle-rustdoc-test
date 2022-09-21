window.SIDEBAR_ITEMS = {"enum":[["DiagnosticArgValue","Simplified version of `FluentValue` that can implement `Encodable` and `Decodable`. Converted to a `FluentValue` by the emitter to be used in diagnostic translation."],["DiagnosticId",""],["StringPart",""]],"macro":[["into_diagnostic_arg_using_display",""]],"struct":[["Diagnostic",""],["DiagnosticArgFromDisplay",""],["DiagnosticStyledString",""],["SubDiagnostic","A “sub”-diagnostic attached to a parent diagnostic. For example, a note attached to an error."],["SuggestionsDisabled","Error type for `Diagnostic`’s `suggestions` field, indicating that `.disable_suggestions()` was called on the `Diagnostic`."]],"trait":[["AddSubdiagnostic","Trait implemented by error types. This should not be implemented manually. Instead, use `#[derive(SessionSubdiagnostic)]` – see [rustc_macros::SessionSubdiagnostic]."],["DecorateLint","Trait implemented by lint types. This should not be implemented manually. Instead, use `#[derive(LintDiagnostic)]` – see [rustc_macros::LintDiagnostic]."],["IntoDiagnosticArg","Converts a value of a type into a `DiagnosticArg` (typically a field of a `SessionDiagnostic` struct). Implemented as a custom trait rather than `From` so that it is implemented on the type being converted rather than on `DiagnosticArgValue`, which enables types from other `rustc_*` crates to implement this."]],"type":[["DiagnosticArg","Simplified version of `FluentArg` that can implement `Encodable` and `Decodable`. Collection of `DiagnosticArg` are converted to `FluentArgs` (consuming the collection) at the start of diagnostic emission."]]};