def __build_nest(service_name, port_forwards=[]):
    k8s_yaml(".k8s/apps/" + service_name + ".yaml")
    k8s_resource(service_name, port_forwards=port_forwards, labels=["apps"])

    docker_build(
        service_name + "-image",
        dockerfile="Dockerfile.nest",
        context=".",
        build_args={"node_env": "development", "service_name": service_name},
        only=[
            "./nx.json",
            "./package.json",
            "./tsconfig.base.json",
            "./yarn.lock",
            "./apps/" + service_name + "/src",
            "./apps/" + service_name + "/project.json",
            "./apps/" + service_name + "/tsconfig.app.json",
            "./apps/" + service_name + "/tsconfig.json",
            "./apps/" + service_name + "/webpack.config.js",
        ],
        entrypoint="node /dist/" + service_name + "/main.js",
    )


def init():
    docker_prune_settings(disable=False, num_builds=3, keep_recent=2)

    k8s_yaml([".k8s/mongo.yaml", ".k8s/nats.yaml"])
    k8s_resource("mongodb", port_forwards=["27017:27017"], labels=["infrastructure"])
    k8s_resource("nats", port_forwards=["4222:4222"], labels=["infrastructure"])

    # apps
    __build_nest("api", "3001:3001")
