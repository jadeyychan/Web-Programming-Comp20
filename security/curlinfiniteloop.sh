#!/bin/bash

while true
do
	echo "adding to the database"
	curl --data "login=mchow&lat=0&lng=0&message=filling the database" https://rocky-headland-1889.herokuapp.com/sendLocation
done




