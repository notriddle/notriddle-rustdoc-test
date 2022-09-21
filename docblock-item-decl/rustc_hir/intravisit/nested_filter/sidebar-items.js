window.SIDEBAR_ITEMS = {"struct":[["None","Do not visit any nested things. When you add a new “non-nested” thing, you will want to audit such uses to see if they remain valid."]],"trait":[["NestedFilter","Specifies what nested things a visitor wants to visit. By “nested things”, we are referring to bits of HIR that are not directly embedded within one another but rather indirectly, through a table in the crate. This is done to control dependencies during incremental compilation: the non-inline bits of HIR can be tracked and hashed separately."]]};