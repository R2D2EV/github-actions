// Ejecutar en esta raiz  npm install @actions/core @actions/github @actions/exec
import * as core from '@actions/core';
import * as github from '@actions/github';
import * as exec from '@actions/exec';


function run() {
    core.notice('Hello from my custom JavaScript action')
}

run();