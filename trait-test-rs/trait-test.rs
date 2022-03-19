#![allow(unused)]
use std::io::Read;
pub struct MyThing<R: Read> {
    r: R,
}
