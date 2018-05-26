

build:
	@./node_modules/.bin/webpack -d --silent
	@printf '\033[32m -----> public/bundle has been created \033[33m [SUCCESS]\n'

watch:
	@./node_modules/.bin/webpack --watch --silent

