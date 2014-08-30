# tmp-stats

a lil helper to get the stats object on arbitrary streams/datas/blobs/pokemons.

#### getStat(data, enc, cb(err, stat, tmpFilePath))
    writes to a tmp file, gets the stat object, and then wipes the file.

#### randomPath()
    gives you a random file path in os.tmpdir to write to


TODO:

    Add tests for error cases (wat are they even?)

    Should randomPath prefix/"namespace" somehow?

    Sort out the tmpDeleted business.
