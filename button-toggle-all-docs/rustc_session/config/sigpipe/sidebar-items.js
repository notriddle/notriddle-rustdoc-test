window.SIDEBAR_ITEMS = {"constant":[["DEFAULT","`SIG_IGN` has been the Rust default since 2014. See https://github.com/rust-lang/rust/issues/62569."],["INHERIT","Do not touch `SIGPIPE`. Use whatever the parent process uses."],["SIG_DFL","Change `SIGPIPE` to `SIG_DFL` so that the process is killed when trying to write to a closed pipe. This is usually the desired behavior for CLI apps that produce textual output that you want to pipe to other programs such as `head -n 1`."],["SIG_IGN","Change `SIGPIPE` to `SIG_IGN` so that failed writes results in `EPIPE` that are eventually converted to `ErrorKind::BrokenPipe`."]]};