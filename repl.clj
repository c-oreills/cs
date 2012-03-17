(require '[cljs.repl :as repl])
(require '[cljs.repl.browser :as browser])  ;; require the browser implementation of IJavaScriptEnv
(def env (browser/repl-env)) ;; create a new environment
(repl/repl env) ;; start the REPL
