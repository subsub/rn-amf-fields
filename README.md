# Development

Still dont know what the best of this one

But usualy I git to this folder from examples's node_modules

```
cd examples/simple/
react-native eject 
git clone ../../ node_modules/rn-amf-fields
cd node_modules/rn-amf-fields
sed -i "s/dist/src/" index.js
```

Make some modification in src. And then after finish..

```
git push origin
cd ../../../../
npm version patch
```

Be Carefule with npm version patch,
It will run
```
npm run preversion
npm run version
npm run postversion
```

And postversion will run

```
npm publsih
```

That will publish this library
