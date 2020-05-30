init:
	docker network create imin_network || true
	# docker volume create --name imin-mysql-volume
	docker-compose \
		-f docker-compose.api.yaml \
		build
