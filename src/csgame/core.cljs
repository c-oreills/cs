(ns csgame.core
  (:require [clojure.browser.repl :as repl]))

(defn ^{:export greet} greet [n] 
  (str "Hello " n))

(def ^{:export conn} conn (js/WebSocket.constructor "ws://localhost:8888"))

(repl/connect "http://localhost:9000/repl")
