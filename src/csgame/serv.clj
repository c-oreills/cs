(ns csgame.serv
  (:use lamina.core aleph.http))

(def broadcast-channel (permanent-channel))

(defn chat-handler [ch handshake]
  (receive ch
    (fn [name]
      (siphon (map* #(str name ": " %) ch) broadcast-channel)
      (siphon broadcast-channel ch))))

(start-http-server chat-handler {:port 8888 :websocket true})
