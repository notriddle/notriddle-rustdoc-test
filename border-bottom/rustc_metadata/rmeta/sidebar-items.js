window.SIDEBAR_ITEMS = {"constant":[["METADATA_HEADER","Metadata header which includes `METADATA_VERSION`."],["METADATA_VERSION","Metadata encoding version. N.B., increment this if you change the format of metadata such that the rustc version can’t be found to compare with `rustc_version()`."],["SYMBOL_OFFSET",""],["SYMBOL_PREINTERNED",""],["SYMBOL_STR",""],["TAG_PARTIAL_SPAN",""],["TAG_VALID_SPAN_FOREIGN",""],["TAG_VALID_SPAN_LOCAL",""]],"enum":[["LazyState","Encoding / decoding state for `Lazy`s (`LazyValue`, `LazyArray`, and `LazyTable`)."]],"fn":[["provide",""],["rustc_version",""]],"macro":[["define_tables","Define `LazyTables` and `TableBuilders` at the same time."]],"mod":[["decoder",""],["def_path_hash_map",""],["encoder",""],["table",""]],"struct":[["CrateDep",""],["CrateRoot","Serialized metadata for a crate. When compiling a proc-macro crate, we encode many of the `LazyArray<T>` fields as `Lazy::empty()`. This serves two purposes:"],["GeneratorData",""],["IncoherentImpls",""],["LazyArray","A list of lazily-decoded values."],["LazyTable","A list of lazily-decoded values, with the added capability of random access."],["LazyTables",""],["LazyValue","A value of type T referred to by its absolute position in the metadata, and which can be decoded lazily."],["ProcMacroData",""],["RawDefId","On-disk representation of `DefId`. This creates a type-safe way to enforce that we remap the CrateNum between the on-disk representation and the compilation session."],["TableBuilders",""],["TraitImpls",""],["VariantData",""]],"type":[["ExpnDataTable",""],["ExpnHashTable",""],["SyntaxContextTable",""]]};