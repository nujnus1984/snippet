
res.status(code)
res.set(name, value)
res.cookie(name, value, [options]), res.clearCookie(name, [options])
res.redirect([status], url)
res.send(body), res.send(status, body)
res.json(json), res.json(status, json)
res.jsonp(json), res.jsonp(status, json)
res.type(type)
res.format(object)
res.attachment([filename]), res.download(path, [filename], [callback])
res.links(links)
res.locals, res.render(view, [locals], callback)
