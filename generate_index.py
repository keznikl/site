#!/usr/bin/env python3
import yaml
from jinja2 import Environment, FileSystemLoader

if __name__ == "__main__":
    print("Loading YAML...")
    config_data = yaml.load(open('./templates/index.yaml'))
    print("Loading template...")
    env = Environment(loader=FileSystemLoader('./templates'), trim_blocks=True, lstrip_blocks=True)
    template = env.get_template('index.tpl')
    print("Rendering page...")
    index = template.render(config_data)
    print("Storing rendered page...")
    with open("./static/index.html", "w") as fh:
        fh.write(index)