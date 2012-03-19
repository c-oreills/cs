(ns csgame.serv
  (:use lamina.core aleph.http)
  (:require (clj-json [core :as json])))

(def broadcast-channel (permanent-channel))

(def ^:dynamic *player-pos* (ref {}))

(defn player-pos [name] (@*player-pos* name))

(defn process-data [name data]
  (json/generate-string {"name" name
                         "data" data})
  )


(defn chat-handler [ch handshake]
  (receive ch
    (fn [name]
      (let 
        [pos [(rand-int 200) (rand-int 200)]]
        (dosync 
          (commute *player-pos* assoc name pos))
        (siphon (map* #(process-data name %) ch) broadcast-channel)
        (siphon broadcast-channel ch)))))

(start-http-server chat-handler {:port 8888 :websocket true})
