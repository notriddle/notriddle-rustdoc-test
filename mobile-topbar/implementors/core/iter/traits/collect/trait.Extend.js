(function() {var implementors = {
"alloc":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/collections/binary_heap/struct.BinaryHeap.html\" title=\"struct alloc::collections::binary_heap::BinaryHeap\">BinaryHeap</a>&lt;T&gt;"],["impl&lt;'a, T:&nbsp;'a + <a class=\"trait\" href=\"core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"core/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"alloc/collections/binary_heap/struct.BinaryHeap.html\" title=\"struct alloc::collections::binary_heap::BinaryHeap\">BinaryHeap</a>&lt;T&gt;"],["impl&lt;K:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>, V, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a> + <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"core/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"alloc/collections/btree_map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree_map::BTreeMap\">BTreeMap</a>&lt;K, V, A&gt;"],["impl&lt;'a, K:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, V:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a> + <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;(<a class=\"primitive\" href=\"core/primitive.reference.html\">&amp;'a </a>K, <a class=\"primitive\" href=\"core/primitive.reference.html\">&amp;'a </a>V)&gt; for <a class=\"struct\" href=\"alloc/collections/btree_map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree_map::BTreeMap\">BTreeMap</a>&lt;K, V, A&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a> + <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/collections/btree_set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree_set::BTreeSet\">BTreeSet</a>&lt;T, A&gt;"],["impl&lt;'a, T:&nbsp;'a + <a class=\"trait\" href=\"core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a> + <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"core/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"alloc/collections/btree_set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree_set::BTreeSet\">BTreeSet</a>&lt;T, A&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/collections/linked_list/struct.LinkedList.html\" title=\"struct alloc::collections::linked_list::LinkedList\">LinkedList</a>&lt;T&gt;"],["impl&lt;'a, T:&nbsp;'a + <a class=\"trait\" href=\"core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"core/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"alloc/collections/linked_list/struct.LinkedList.html\" title=\"struct alloc::collections::linked_list::LinkedList\">LinkedList</a>&lt;T&gt;"],["impl&lt;T, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt;"],["impl&lt;'a, T:&nbsp;'a + <a class=\"trait\" href=\"core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"core/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt;"],["impl <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"core/primitive.char.html\">char</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;&amp;'a <a class=\"primitive\" href=\"core/primitive.char.html\">char</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;&amp;'a <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"primitive\" href=\"core/primitive.str.html\">str</a>, <a class=\"struct\" href=\"alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl&lt;T, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + 'a, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a> + 'a&gt; <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"core/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;"]],
"core":[],
"proc_macro":[["impl <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"proc_macro/enum.TokenTree.html\" title=\"enum proc_macro::TokenTree\">TokenTree</a>&gt; for <a class=\"struct\" href=\"proc_macro/struct.TokenStream.html\" title=\"struct proc_macro::TokenStream\">TokenStream</a>"],["impl <a class=\"trait\" href=\"core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"proc_macro/struct.TokenStream.html\" title=\"struct proc_macro::TokenStream\">TokenStream</a>&gt; for <a class=\"struct\" href=\"proc_macro/struct.TokenStream.html\" title=\"struct proc_macro::TokenStream\">TokenStream</a>"]],
"std":[["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"std/collections/hash_map/struct.HashMap.html\" title=\"struct std::collections::hash_map::HashMap\">HashMap</a>&lt;K, V, S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"std/cmp/trait.Eq.html\" title=\"trait std::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"std/hash/trait.Hash.html\" title=\"trait std::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"std/hash/trait.BuildHasher.html\" title=\"trait std::hash::BuildHasher\">BuildHasher</a>,</span>"],["impl&lt;'a, K, V, S&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;(<a class=\"primitive\" href=\"primitive.reference.html\">&amp;'a </a>K, <a class=\"primitive\" href=\"primitive.reference.html\">&amp;'a </a>V)&gt; for <a class=\"struct\" href=\"std/collections/hash_map/struct.HashMap.html\" title=\"struct std::collections::hash_map::HashMap\">HashMap</a>&lt;K, V, S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"std/cmp/trait.Eq.html\" title=\"trait std::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"std/hash/trait.Hash.html\" title=\"trait std::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"std/marker/trait.Copy.html\" title=\"trait std::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"std/marker/trait.Copy.html\" title=\"trait std::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"std/hash/trait.BuildHasher.html\" title=\"trait std::hash::BuildHasher\">BuildHasher</a>,</span>"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"std/collections/hash_set/struct.HashSet.html\" title=\"struct std::collections::hash_set::HashSet\">HashSet</a>&lt;T, S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"std/cmp/trait.Eq.html\" title=\"trait std::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"std/hash/trait.Hash.html\" title=\"trait std::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"std/hash/trait.BuildHasher.html\" title=\"trait std::hash::BuildHasher\">BuildHasher</a>,</span>"],["impl&lt;'a, T, S&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"std/collections/hash_set/struct.HashSet.html\" title=\"struct std::collections::hash_set::HashSet\">HashSet</a>&lt;T, S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"std/cmp/trait.Eq.html\" title=\"trait std::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"std/hash/trait.Hash.html\" title=\"trait std::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"std/marker/trait.Copy.html\" title=\"trait std::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"std/hash/trait.BuildHasher.html\" title=\"trait std::hash::BuildHasher\">BuildHasher</a>,</span>"],["impl <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;&amp;'a <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl&lt;P:&nbsp;<a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;P&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()