(defproject csgame "1.0.0-SNAPSHOT"
  :description "clojurescript test game"
  :dev-dependencies [[lein-clojurescript "1.1.0"]]
  :extra-classpath-dirs ["src"]
  :cljs-output-to "out/csgame.js"
  :cljs-output-dir "out"
  ;:cljs-optimizations :advanced
  ;:cljs-externs ["externs.js"]
  ;:cljs-libs ["js/foobar.js"]
  :cljs-test-cmd ["phantomjs" "test.js"]
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [aleph "0.2.1-clj13-SNAPSHOT"]]
  :main csgame.serv)
