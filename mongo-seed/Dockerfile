FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo --db client --collection defaulterclients --type json --file /init.json --jsonArray