window.SIDEBAR_ITEMS = {"enum":[["PlaceConflictBias","When checking if a place conflicts with another place, this enum is used to influence decisions where a place might be equal or disjoint with another place, such as if `a[i] == a[j]`. `PlaceConflictBias::Overlap` would bias toward assuming that `i` might equal `j` and that these places overlap. `PlaceConflictBias::NoOverlap` assumes that for the purposes of the predicate being run in the calling context, the conservative choice is to assume the compared indices are disjoint (and therefore, do not overlap)."]],"fn":[["borrow_conflicts_with_place","Checks whether the `borrow_place` conflicts with the `access_place` given a borrow kind and access depth. The `bias` parameter is used to determine how the unknowable (comparing runtime array indices, for example) should be interpreted - this depends on what the caller wants in order to make the conservative choice and preserve soundness."],["place_base_conflict",""],["place_components_conflict",""],["place_projection_conflict",""],["places_conflict","Helper function for checking if places conflict with a mutable borrow and deep access depth. This is used to check for places conflicting outside of the borrow checking code (such as in dataflow)."]]};