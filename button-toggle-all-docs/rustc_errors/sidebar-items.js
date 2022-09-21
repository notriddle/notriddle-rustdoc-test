window.SIDEBAR_ITEMS = {"enum":[["Applicability","Indicates the confidence in the correctness of a suggestion."],["DiagnosticArgValue","Simplified version of `FluentValue` that can implement `Encodable` and `Decodable`. Converted to a `FluentValue` by the emitter to be used in diagnostic translation."],["DiagnosticId",""],["DiagnosticMessage","Abstraction over a message in a diagnostic to support both translatable and non-translatable diagnostic messages."],["Level",""],["StashKey","A key denoting where from a diagnostic was stashed."],["Style",""],["SubdiagnosticMessage","Abstraction over a message in a subdiagnostic (i.e. label, note, help, etc) to support both translatable and non-translatable diagnostic messages."],["SuggestionStyle",""]],"fn":[["add_elided_lifetime_in_path_suggestion",""],["default_track_diagnostic",""],["fallback_fluent_bundle","Return the default `FluentBundle` with standard “en-US” diagnostic messages."],["fluent_bundle","Returns Fluent bundle with the user’s locale resources from `$sysroot/share/locale/$requested_locale/*.ftl`."]],"macro":[["error_code",""],["pluralize",""],["struct_span_err",""]],"mod":[["annotate_snippet_emitter_writer","Emit diagnostics using the `annotate-snippets` library"],["diagnostic",""],["diagnostic_builder",""],["emitter","The current rustc diagnostics emitter."],["json","A JSON emitter for errors."],["lock","Bindings to acquire a global named lock."],["registry",""],["snippet",""],["styled_buffer",""],["translation",""]],"static":[["DEFAULT_LOCALE_RESOURCES",""],["TRACK_DIAGNOSTICS",""]],"struct":[["CodeSuggestion",""],["DelayedDiagnostic",""],["Diagnostic",""],["DiagnosticArgFromDisplay",""],["DiagnosticBuilder","Used for emitting structured error messages and other diagnostic information."],["DiagnosticStyledString",""],["ErrorGuaranteed","Useful type to use with `Result<>` indicate that an error has already been reported to the user, so no need to continue checking."],["ExplicitBug","Signifies that the compiler died with an explicit call to `.bug` or `.span_bug` rather than a failed assertion, etc."],["FatalError","Used as a return value to signify a fatal error occurred. (It is also used as the argument to panic at the moment, but that will eventually not be true.)"],["FatalErrorMarker",""],["Handler","A handler deals with errors and other compiler output. Certain errors (fatal, bug, unimpl) may cause immediate exit, others log errors for later reporting."],["HandlerFlags",""],["HandlerInner","This inner struct exists to keep it all behind a single lock; this is done to prevent possible deadlocks in a multi-threaded compiler, as well as inconsistent state observation."],["LanguageIdentifier","`LanguageIdentifier` is a core struct representing a Unicode Language Identifier."],["LintDiagnosticBuilder","Wrapper around a `DiagnosticBuilder` for creating lints."],["MultiSpan","A collection of `Span`s."],["SpanLabel","A span together with some additional data."],["SubDiagnostic","A “sub”-diagnostic attached to a parent diagnostic. For example, a note attached to an error."],["Substitution","See the docs on `CodeSuggestion::substitutions`"],["SubstitutionHighlight","Used to translate between `Span`s and byte positions within a single output line in highlighted code of structured suggestions."],["SubstitutionPart",""]],"trait":[["AddSubdiagnostic","Trait implemented by error types. This should not be implemented manually. Instead, use `#[derive(SessionSubdiagnostic)]` – see [rustc_macros::SessionSubdiagnostic]."],["DecorateLint","Trait implemented by lint types. This should not be implemented manually. Instead, use `#[derive(LintDiagnostic)]` – see [rustc_macros::LintDiagnostic]."],["EmissionGuarantee","Trait for types that `DiagnosticBuilder::emit` can return as a “guarantee” (or “proof”) token that the emission happened."],["IntoDiagnosticArg","Converts a value of a type into a `DiagnosticArg` (typically a field of a `SessionDiagnostic` struct). Implemented as a custom trait rather than `From` so that it is implemented on the type being converted rather than on `DiagnosticArgValue`, which enables types from other `rustc_*` crates to implement this."]],"type":[["DiagnosticArg","Simplified version of `FluentArg` that can implement `Encodable` and `Decodable`. Collection of `DiagnosticArg` are converted to `FluentArgs` (consuming the collection) at the start of diagnostic emission."],["FluentBundle",""],["LazyFallbackBundle","Type alias for the result of `fallback_fluent_bundle` - a reference-counted pointer to a lazily evaluated fluent bundle."],["PResult",""]]};