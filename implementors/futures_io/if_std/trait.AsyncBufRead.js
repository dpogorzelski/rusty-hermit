(function() {var implementors = {};
implementors["futures_io"] = [];
implementors["futures_lite"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.BufReader.html\" title=\"struct futures_lite::io::BufReader\">BufReader</a>&lt;R&gt;","synthetic":false,"types":["futures_lite::io::BufReader"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Cursor.html\" title=\"struct futures_lite::io::Cursor\">Cursor</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsRef&lt;[u8]&gt; + Unpin,&nbsp;</span>","synthetic":false,"types":["futures_lite::io::Cursor"]},{"text":"impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Empty.html\" title=\"struct futures_lite::io::Empty\">Empty</a>","synthetic":false,"types":["futures_lite::io::Empty"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Take.html\" title=\"struct futures_lite::io::Take\">Take</a>&lt;R&gt;","synthetic":false,"types":["futures_lite::io::Take"]},{"text":"impl&lt;R1:&nbsp;<a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a>, R2:&nbsp;<a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Chain.html\" title=\"struct futures_lite::io::Chain\">Chain</a>&lt;R1, R2&gt;","synthetic":false,"types":["futures_lite::io::Chain"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()