'use strict'

function Todo(){
    this.root = document.querySelector('#root')
    this.todoExtremeNode = document.createElement('div')
    this.headNode = document.createElement('div')
    this.bodyNode = document.createElement('div')
    this.headDelNode = document.createElement('div')
    this.headDelLastNode = document.createElement('div')
    this.headAddNode = document.createElement('div')
    
    this.todoExtreme = function() {
        this.root.append(this.todoExtremeNode)
        this.todoExtremeNode.classList.add('todo')
    }
    this.head = function() {
        this.todoExtremeNode.append(this.headNode)
        this.headNode.classList.add('head')
    }
    this.headTop = function() {
        let headTop = document.createElement('div')
        this.headNode.append(headTop)
        headTop.classList.add('head-top')
        
        
        headTop.append(this.headDelNode)
        this.headDelNode.classList.add('head__del')
        this.headDelNode.textContent = 'Delete All'
        
        headTop.append(this.headDelLastNode)
        this.headDelLastNode.classList.add('head__del-last')
        this.headDelLastNode.textContent = 'Delete Last'
        
        
        let headForm = document.createElement('form')
        headTop.append(headForm)
        headForm.classList.add('head-form')
        
        let headFormText = document.createElement('input')
        headFormText.type = 'text'
        headFormText.placeholder = 'Enter todo ...'
        headFormText.classList.add('head-form__text')
        headForm.append(headFormText)
        
        
        headTop.append(this.headAddNode)
        this.headAddNode.classList.add('head__add')
        this.headAddNode.textContent = 'Add'
        
    }
    this.headBottom = function() {
        let headBottom = document.createElement('div')
        this.headNode.append(headBottom)
        headBottom.classList.add('head-bottom')
        
        
        let headAll = document.createElement('div')
        headBottom.append(headAll)
        headAll.classList.add('head__all')
        headAll.textContent = 'All: 2'
        
        let headCompleted = document.createElement('div')
        headBottom.append(headCompleted)
        headCompleted.classList.add('head__completed')
        headCompleted.textContent = 'Completed: 1'
        
        let headShow = document.createElement('div')
        headBottom.append(headShow)
        headShow.classList.add('head__show')
        headShow.textContent = 'Show All'
        
        let headShowCompleted = document.createElement('div')
        headBottom.append(headShowCompleted)
        headShowCompleted.classList.add('head__show-completed')
        headShowCompleted.textContent = 'Show Completed'
        
        
        let headFormSearch = document.createElement('form')
        headBottom.append(headFormSearch)
        headFormSearch.classList.add('head-form-search')
        
        let headFormSearchInput = document.createElement('input')
        headFormSearchInput.type = 'search'
        headFormSearchInput.placeholder = 'Search...'
        headFormSearchInput.classList.add('head-form-search__input')
        headFormSearch.append(headFormSearchInput)
    }
    this.body = function() {
        this.todoExtremeNode.append(this.bodyNode)
        this.bodyNode.classList.add('body')
    }
    this.createBodyItem = function(text) {
        let bodyItem = document.createElement('div')
        this.bodyNode.append(bodyItem)
        bodyItem.classList.add('body-item')
        

        let bodyForm = document.createElement('form')
        bodyItem.append(bodyForm)
        bodyForm.classList.add('body-form')
        

        let bodyFormCheck = document.createElement('input')
        bodyFormCheck.type = 'checkbox'
        bodyFormCheck.id = 'id' + this.couter()
        bodyFormCheck.classList.add('body-form__check')
        bodyForm.append(bodyFormCheck)
        
        let bodyLebel = document.createElement('label')
        bodyLebel.setAttribute('for', bodyFormCheck.id)
        bodyForm.append(bodyLebel)
        bodyLebel.classList.add('body-form__label')

        
        let bodyFormText = document.createElement('input')
        bodyFormText.type = 'text'
        bodyFormText.placeholder = 'Todo text'
        bodyFormText.classList.add('body-form__text')
        bodyFormText.value = text
        bodyFormText.readOnly = true
        bodyForm.append(bodyFormText)
        
        
        let bodyFormBlock = document.createElement('div')
        bodyForm.append(bodyFormBlock)
        bodyFormBlock.classList.add('body-form-block')
        
        let bodyFormClose = document.createElement('div')
        bodyFormBlock.append(bodyFormClose)
        bodyFormClose.classList.add('body-form__close')
        
        let bodyFormImg = document.createElement('img')
        bodyFormClose.append(bodyFormImg)
        bodyFormImg.setAttribute('src', 'images/close.png')
        bodyFormImg.classList.add('body-form__close-img')
        
        let bodyFormDate = document.createElement('div')
        bodyFormBlock.append(bodyFormDate)
        bodyFormDate.classList.add('body-form__date')
        bodyFormDate.textContent = 'Date'

        bodyLebel.addEventListener('click', () => {
            bodyForm.classList.toggle('bg--grey')
        })
    }
    this.couter = function() {
        let count = 0;
        let getItems = document.querySelectorAll('.body-item')
        count = getItems.length
        return count
    }
    this.addItems = function() {
        this.headAddNode.addEventListener('click', () => {
            const text = document.querySelector('.head-form__text').value
            if(text){
                this.createBodyItem(text)
            }
        }) 

    }
    this.clearAll = function() {
        let getBodyItem = document.querySelectorAll('.body-item')
        getBodyItem.forEach(item => {
            item.remove()
        })
    }
    this.clearOnClick = function() {
        this.headDelNode.addEventListener('click', () => {
            this.clearAll()
        })
    }
    this.deleteLast = function() {
        let getLastItem = document.querySelectorAll('.body-item:last-child')
        getLastItem.forEach(item => {
            item.remove()
        })
    }
    this.deleteLastOnClick = function() {
        this.headDelLastNode.addEventListener('click', () => {
            this.deleteLast()
        })
    }

}

let todo = new Todo();

todo.todoExtreme()
todo.head()
todo.headTop()
todo.headBottom()
todo.body()
todo.addItems()
todo.clearOnClick()
todo.deleteLastOnClick()

