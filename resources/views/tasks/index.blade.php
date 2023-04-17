@extends('layouts.app')

@section('content')
    hello world
    <div>
        <tasks :tasks="{{ json_encode($tasks) }}"></tasks>
    </div>
@endsection
