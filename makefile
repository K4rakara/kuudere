.PHONY: all clean dirs npm standalone

all:
	@echo "Compiling Kuudere..."; \
	make clean; \
	make dirs; \
	make npm; \
	make standalone; \

clean:
	@echo "Cleaning..."; \
	rm -rf ./bin; \

dirs:
	@echo "Creating directories..."; \
	mkdir -p ./bin/npm/; \
	mkdir -p ./bin/standalone/; \
	mkdir -p ./bin/tmp/tsc/; \
	mkdir -p ./bin/tmp/browserify/; \
	mkdir -p ./bin/tmp/babel-minify/; \

npm:
	@echo "Creating NPM package..."; \
	echo "Compiling TypeScript..."; \
	yarn tsc -p ./tsconfig.npm.json; \

standalone:
	@echo "Creating standalone..."; \
	echo "Compiling TypeScript..."; \
	yarn tsc -p ./tsconfig.standalone.json; \
	echo "Browserify-ing..."; \
	yarn browserify ./bin/tmp/tsc/index.js -o ./bin/tmp/browserify/index.js; \
	echo "Minifying..."; \
	yarn babel-minify ./bin/tmp/browserify/index.js --out-file ./bin/tmp/babel-minify/kuudere.js; \
	cp ./bin/tmp/babel-minify/kuudere.js ./bin/standalone/; \
