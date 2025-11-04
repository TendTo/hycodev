---
title: "BarrierBench"
subtitle: "A Benchmark Dataset for Safety Verification of Dynamical Systems"
banner: "/images/banners/softwaree.jpg"
date: "2024-06-10"
tags: ["dataset", "benchmark", "safety verification", "barrier certificates", "dynamical systems"]
---

_Empowering research in control theory, AI safety, and formal verification_

## Overview

**BarrierBench** is a comprehensive benchmark dataset that contains **100 test cases** for evaluating safety verification algorithms and barrier certificate synthesis methods. The dataset includes **90 solved problems** with verified barrier certificates and controllers, along with **10 unsolved challenging problems** that serve as open benchmarks.

Dataset Contents
The dataset contains dynamical systems spanning continuous-time ODEs, discrete-time systems, and controlled systems across various dimensions (**2D to 8D**). Problems include linear systems, nonlinear systems, chaotic attractors, and complex transcendental systems. Each problem specifies:

- ⚙️ System dynamics equations
- 🛡️ Initial safe region
- 🚫 Unsafe region to avoid
- ✅ Verified barrier certificate (for solved problems)
- 🎮 Control law (for controlled systems)

## Data Format

The dataset is provided as a JSON file with structured entries for solved and unsolved problems.

```json
{
  "solved_problems": [90 problems with solutions],
  "unsolved_problems": [10 challenging open problems]
}
```

Each problem entry follows this structure:

```json
{
  "problem": {
    "dynamics": "mathematical equations",
    "initial_set": {"type", "radius"/"bounds", "center"},
    "unsafe_set": {"type", "radius"/"bounds", "complement"},
    "controller_parameters": "control inputs (if applicable)"
  },
  "barrier": "barrier function polynomial",
  "controllers": "control law expressions",
  "template_type": "solution classification"
}
```

> **Example**
>
> ```json
> {
>   "problem": {
>     "dynamics": "dx1/dt = x2 + u0, dx2/dt = sin(x1) + u1",
>     "initial_set": {
>       "type": "ball",
>       "radius": 0.3,
>       "center": [0, 0]
>     },
>     "unsafe_set": {
>       "type": "ball",
>       "radius": 1.5,
>       "center": [0, 0],
>       "complement": true
>     },
>     "controller_parameters": "u0, u1"
>   },
>   "barrier": "x1**2 + x2**2 - 1.0",
>   "controllers": "u0=-3*x1 - 1.5*x2, u1=-3*x2 - 1.5*sin(x1)",
>   "template_type": "llm_generated_with_controller"
> }
> ```

## Usage

Loading dataset in Python or MATLAB.

::: code-group labels=[Python, MATLAB]

```python
import json

# Load the dataset
with open('Barrier_Bench.json', 'r') as file:
    dataset = json.load(file)

solved_problems = dataset['solved_problems']
unsolved_problems = dataset['unsolved_problems']

print(f"Solved problems: {len(solved_problems)}")
print(f"Unsolved problems: {len(unsolved_problems)}")

# Access a specific problem
problem = solved_problems[1]
dynamics = problem['problem']['dynamics']
barrier = problem['barrier']
controller = problem.get('controllers', None)

print(f"Dynamics: {dynamics}")
print(f"Barrier: {barrier}")

if controller:
    print(f"Controller: {controller}")
```

```matlab
clc; clear; close all;

% Load the dataset
filename = 'Barrier_Bench.json';
str = fileread(filename);
dataset = jsondecode(str);

solved_problems = dataset.solved_problems;
unsolved_problems = dataset.unsolved_problems;

fprintf('Solved problems: %d\n', length(solved_problems));
fprintf('Unsolved problems: %d\n', length(unsolved_problems));

% Access a specific problem
problem = solved_problems{2};
dynamics = problem.problem.dynamics;
barrier = problem.barrier;

fprintf('Dynamics: %s\n', dynamics);
fprintf('Barrier: %s\n', barrier);
if isfield(problem, 'controllers')
    fprintf('Controller: %s\n', problem.controllers);
end
```

:::

## Download Dataset

You can download the complete BarrierBench dataset as a compressed file.

[Download Dataset](/data/barrier_dataset.json)

## Contact

For any questions or inquiries regarding the BarrierBench dataset, please contact:

- 📧 [Sadegh Soudjani](mailto:sadegh@mpi-sws.org)
