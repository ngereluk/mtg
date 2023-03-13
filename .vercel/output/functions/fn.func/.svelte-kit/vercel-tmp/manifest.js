export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.1f7e9061.js","imports":["_app/immutable/entry/start.1f7e9061.js","_app/immutable/chunks/index.e4ba9c66.js","_app/immutable/chunks/singletons.40761bcd.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c1c1d6c4.js","imports":["_app/immutable/entry/app.c1c1d6c4.js","_app/immutable/chunks/index.e4ba9c66.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/api/GetCardDetails",
				pattern: /^\/api\/GetCardDetails\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/GetCardDetails/_server.ts.js')
			},
			{
				id: "/api/GetCardsInSet",
				pattern: /^\/api\/GetCardsInSet\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/GetCardsInSet/_server.ts.js')
			},
			{
				id: "/api/GetCards",
				pattern: /^\/api\/GetCards\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/GetCards/_server.ts.js')
			},
			{
				id: "/cardDetails/[slug]",
				pattern: /^\/cardDetails\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/cards",
				pattern: /^\/cards\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
