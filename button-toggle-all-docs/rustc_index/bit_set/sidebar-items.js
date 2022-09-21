window.SIDEBAR_ITEMS = {"constant":[["CHUNK_BITS",""],["CHUNK_WORDS",""],["SPARSE_MAX",""],["WORD_BITS",""],["WORD_BYTES",""]],"enum":[["Chunk",""],["HybridBitSet","A fixed-size bitset type with a hybrid representation: sparse when there are up to a `SPARSE_MAX` elements in the set, but dense when there are more than `SPARSE_MAX`."],["HybridIter",""]],"fn":[["bitwise",""],["bitwise_changes","Does this bitwise operation change `out_vec`?"],["chunk_index",""],["chunk_word_index_and_mask",""],["clear_excess_bits_in_final_word",""],["dense_sparse_intersect",""],["inclusive_start_end",""],["max_bit",""],["num_chunks",""],["num_words",""],["sequential_update",""],["sparse_intersect",""],["word_index_and_mask",""]],"macro":[["bit_relations_inherent_impls",""]],"struct":[["BitIter",""],["BitMatrix","A fixed-size 2D bit matrix type with a dense representation."],["BitSet","A fixed-size bitset type with a dense representation."],["ChunkedBitIter",""],["ChunkedBitSet","A fixed-size bitset type with a partially dense, partially sparse representation. The bitset is broken into chunks, and chunks that are all zeros or all ones are represented and handled very efficiently."],["FiniteBitSet","A fixed-sized bitset type represented by an integer type. Indices outwith than the range representable by `T` are considered set."],["GrowableBitSet","A resizable bitset type with a dense representation."],["SparseBitMatrix","A fixed-column-size, variable-row-size 2D bit matrix with a moderately sparse representation."],["SparseBitSet","A fixed-size bitset type with a sparse representation and a maximum of `SPARSE_MAX` elements. The elements are stored as a sorted `ArrayVec` with no duplicates."]],"trait":[["BitRelations",""],["FiniteBitSetTy","Integral type used to represent the bit set."]],"type":[["ChunkSize","ChunkSize is small to keep `Chunk` small. The static assertion ensures it’s not too small."],["Word",""]]};