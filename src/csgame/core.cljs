(ns csgame.core
  (:require [clojure.browser.repl :as repl]))

(defn ^{:export greet} greet [n] 
  (str "Hello " n))

(def ^{:export conn} conn (new js/WebSocket "ws://localhost:8888"))

(aset conn "onopen" #(. conn send (str "Bot" (rand-int 100))))

(aset conn "onerror" (fn [err] (. js/console log (str "WebSocket Error: " err))))

(aset conn "onmessage" (fn [msg] (. js/console log (str "Server: " (aget msg "data")))))

(repl/connect "http://localhost:9000/repl")
