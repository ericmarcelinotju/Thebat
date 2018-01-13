<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForumRuleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forum_rule', function (Blueprint $table) {
            $table->unsignedInteger('forum_id');
            $table->foreign('forum_id')->references('id')->on('forums');
            $table->unsignedInteger('rule_id');
            $table->foreign('rule_id')->references('id')->on('rules');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forum_rule');
    }
}
